import { Ref, computed } from 'vue';
import { CardTypeVariant } from '../types';
import classNames from 'classnames';

interface useCardSectionClassesProps {
  tag: Ref<CardTypeVariant>;
  horizontal: Ref<boolean>;
}

export function useCardSectionClasses(props: useCardSectionClassesProps): {
  wrapperClasses: Ref<string>;
} {
  const classes = computed(() =>
    classNames(
      'x-card__section',
      ` x-card__section--${
        props.horizontal.value === true ? 'horiz row no-wrap' : 'vert'
      }`
    )
  );

  return {
    wrapperClasses: classes,
  };
}
