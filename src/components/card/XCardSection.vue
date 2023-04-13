<template>
  <component :is="tag" :class="wrapperClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { CardTypeVariant } from './types';
import { toRefs } from 'vue';
import { useCardSectionClasses } from './composables/useCardSectionClasses';

const props = withDefaults(
  defineProps<{
    tag?: CardTypeVariant;
    horizontal?: boolean;
  }>(),
  {
    tag: 'div',
    horizontal: false,
  }
);

const { wrapperClasses } = useCardSectionClasses(toRefs(props));
</script>
