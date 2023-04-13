import { Ref, computed } from 'vue';
import { CardTypeVariant } from '../types';
import classNames from 'classnames';

interface UseCardClassesProps {
  tag: Ref<CardTypeVariant>;
  square: Ref<boolean>;
  flat: Ref<boolean>;
  bordered: Ref<boolean>;
  hoverable: Ref<boolean>;
}

export function useCardClasses(props: UseCardClassesProps): {
  wrapperClasses: Ref<string>;
} {
  const classes = computed(() =>
    classNames(
      'x-card',
      props.bordered.value === true ? 'x-card--bordered' : '',
      props.hoverable.value === true ? 'x-card--hover' : '',
      props.square.value === true ? 'x-card--square border-0' : '',
      props.flat.value === true ? 'x-card--flat shadow-none' : ''
    )
  );

  return {
    wrapperClasses: classes,
  };
}
