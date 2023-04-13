import {
  Ref,
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs,
  watch,
} from 'vue';
import { XModalRawPositionClassVariant } from '../types';
import { usePortal } from './usePortal';

export interface UseXModalRawClassesProps {
  modelValue: Ref<boolean>;
  'onUpdate:modelValue'?: Ref<void>;
  disable: Ref<boolean>;
  position: Ref<XModalRawPositionClassVariant>;
  persistent: Ref<boolean>;
  fullWidth: Ref<boolean>;
  fullHeight: Ref<boolean>;
  square: Ref<boolean>;
  maximized: Ref<boolean>;
  seamless: Ref<boolean>;
}

export function useXModalRawClasses(
  props: UseXModalRawClassesProps,
  emit: {
    (action: 'onUpdate:modelValue', payload: boolean): void;
    (action: 'update:modelValue', payload: boolean): void;
  }
) {
  let openedModals = 0;

  const positionClass: Record<XModalRawPositionClassVariant, string> = {
    standard: 'fixed-full justify-center items-center',
    top: 'fixed-top justify-center',
    bottom: 'fixed-bottom justify-center',
    right: 'fixed-right items-center',
    left: 'fixed-left items-center',
  };

  const attrs = useAttrs();

  const showing = ref(false);

  const classes = computed(() => ({
    'x-modal__inner': true,
    'flex': true,
    'max-w-max': props.fullWidth.value === false,
    'max-h-max': props.fullHeight.value === false,
    'mx-auto': true,
    'my-auto': true,
    'no-pointer-events': true,
    'x-modal__inner--maximized': props.maximized.value === true,
    'x-modal__inner--minimized': props.maximized.value === false,
    'x-modal__inner--standard': true,
    'x-modal__inner--top': props.position.value === 'top',
    'x-modal__inner--bottom': props.position.value === 'bottom',
    'x-modal__inner--right': props.position.value === 'right',
    'x-modal__inner--left': props.position.value === 'left',
    [positionClass[props.position.value]]: true,
    'x-modal__inner--fullwidth': props.fullWidth.value === true,
    'x-modal__inner--fullheight': props.fullHeight.value === true,
    'x-modal__inner--square': props.square.value === true,
  }));

  const useBackdrop = computed(
    () => showing.value === true && props.seamless.value !== true
  );

  const addEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      hide();
    }
  };

  const handleShow = () => {
    if (openedModals < 1 && useBackdrop.value === true) {
      document.body.classList.add('x-body--modal');
    }
    openedModals += 1;
    if (props.persistent.value !== true) {
      document.addEventListener('keydown', addEscapeKey, true);
    }
  };

  const handleHide = () => {
    if (openedModals < 2) {
      document.body.classList.remove('x-body--modal');
    }
    openedModals = openedModals - 1;
    document.removeEventListener('keydown', addEscapeKey, true);
  };

  const processHide = () => {
    if (showing.value === false) {
      return;
    }

    showing.value = false;
    handleHide();
  };

  const processShow = () => {
    if (showing.value === true) {
      return;
    }

    showing.value = true;
    handleShow();
  };

  const hide = () => {
    if (props.disable.value === true) {
      return;
    }

    processHide();
  };

  const onBackdropClick = () => {
    if (props.persistent.value !== true) {
      hide();
    }
  };

  const rootClasses = computed(() => [
    'x-modal fullscreen no-pointer-events',
    attrs.class,
  ]);

  const { showPortal, hidePortal, portalIsActive } = usePortal();

  function processModelChange(val?: boolean) {
    if (
      props.disable.value === true &&
      val === true &&
      props['onUpdate:modelValue'] !== void 0
    ) {
      emit('update:modelValue', false);
    } else if ((val === true) !== showing.value) {
      if (val === true) {
        processShow();
      } else {
        processHide();
      }
    }
  }

  watch(showing, (val) => {
    if (val === true) showPortal();
    else if (val === false) {
      emit('update:modelValue', false);
      hidePortal();
    }
  });

  watch(() => props.modelValue.value, processModelChange);

  onBeforeUnmount(() => {
    processModelChange(false);
  });

  onMounted(() => {
    processModelChange(props.modelValue.value);
  });

  return {
    wrapperActive: portalIsActive,
    wrapperRoot: rootClasses,
    wrapperBackdrop: useBackdrop,
    wrapperBackdropClick: onBackdropClick,
    wrapperShowing: showing,
    wrapperClasses: classes,
  };
}
