<template>
  <div class="doc-code-container">
    <code-prism :lang="lang" :code="code" :style="style" />
  </div>
</template>

<script setup lang="ts">
import CodePrism from './CodePrism';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    code: string;
    maxHeight: string;
    lang: string;
  }>(),
  {
    lang: 'js',
  }
);

const style = computed(() =>
  props.maxHeight !== void 0
    ? { overflow: 'auto', maxHeight: props.maxHeight }
    : null
);
</script>
