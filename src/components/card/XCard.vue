<template>
  <component :is="tag" :class="wrapperClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { CardTypeVariant } from './types';
import { toRefs } from 'vue';
import { useCardClasses } from './composables/useCardClasses';

const props = withDefaults(
  defineProps<{
    tag?: CardTypeVariant;
    square?: boolean;
    flat?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
  }>(),
  {
    tag: 'div',
    square: false,
    flat: false,
    bordered: false,
    hoverable: false,
  }
);

const { wrapperClasses } = useCardClasses(toRefs(props));
</script>
