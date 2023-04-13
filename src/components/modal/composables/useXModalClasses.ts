import { Ref, computed, ref } from 'vue';
import { useElementSize, useWindowSize } from '@vueuse/core';
import { XModalSize } from '../types';
import classNames from 'classnames';
export interface UseXModalClassesProps {
  size: Ref<XModalSize>;
  modelValue: Ref<boolean>;
  title: Ref<string>;
  titleClass: Ref<string>;
  bodyClass: Ref<string>;
  position: Ref<string>;
  noHeader: Ref<boolean>;
  noFooter: Ref<boolean>;
  overflowVisible: Ref<boolean>;
  initialLoading: Ref<boolean>;
  iconLeft: Ref<string>;
  iconRight: Ref<string>;
  tooltipIcon: Ref<string>;
  isOverflowVisible: Ref<boolean>;
  seamless: Ref<boolean>;
  persistent: Ref<boolean>;
  maximized: Ref<boolean>;
  fullWidth: Ref<boolean>;
}

const xModalSizes: Record<XModalSize, string> = {
  xs: 'max-w-full w-80',
  sm: 'max-w-full w-[400px]',
  md: 'max-w-full w-[600px]',
  lg: 'max-w-full w-[720px]',
  xl: 'max-w-full w-[992px]',
};

const main = ref();
const size = useElementSize(main);
const windowSize = useWindowSize();

export function useXModalClasses(
  props: UseXModalClassesProps,
  open: Ref<boolean>,
  emit: {
    (action: 'closeModal'): void;
    (action: 'update:modelValue', payload: boolean): void;
  }
): {
  open: Ref<boolean>;
  close: () => Promise<void>;
  show: () => void;
  wrapperBindClasses: Ref<string>;
  wrapperStyle: Ref<string>;
  overflowVisibleClass: Ref<string>;
} {
  const close = async () => {
    emit('closeModal');
    open.value = false;
  };

  const show = () => {
    open.value = true;
  };

  const sizeClasses = computed(() => {
    if (!props.size.value) return '';
    if (Number(props.size.value)) return '';

    return classNames(xModalSizes[props.size.value]);
  });

  const sizeStyles = computed(() => {
    if (!props.size.value) return '';

    if (Number(props.size.value)) {
      return classNames(`max-width: 100%;width: ${props.size.value}px;`);
    }
    return '';
  });

  const checkModalHeight = computed(() => {
    const modalHeight = size.height;
    const screenHeight = windowSize.height;
    return modalHeight.value <= screenHeight.value - 92;
  });

  const overflowVisibleClass = computed(() => {
    if (props.isOverflowVisible.value && checkModalHeight.value) {
      return classNames('overflow-visible');
    }
    return '';
  });

  const maximizedClass = computed(() => {
    if (props.maximized.value) {
      return 'fullscreen';
    }
    return '';
  });

  const bindClasses = computed(() => {
    return classNames(maximizedClass.value, sizeClasses.value);
  });

  return {
    open,
    close,
    show,
    wrapperBindClasses: bindClasses,
    wrapperStyle: sizeStyles,
    overflowVisibleClass,
  };
}
