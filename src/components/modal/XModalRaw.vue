<template>
  <teleport v-if="wrapperActive" to="body">
    <div v-bind="$attrs" :class="wrapperRoot">
      <transition name="x-transition--fade" :appear="true">
        <div
          v-if="wrapperBackdrop"
          class="x-modal__backdrop fixed-full"
          :aria-hidden="true"
          @click="wrapperBackdropClick"
        ></div>
      </transition>
      <transition name="x-transition--fade" :appear="true">
        <div v-if="wrapperShowing" :class="wrapperClasses" tabindex="-1">
          <slot name="default"></slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { XModalRawPositionClassVariant } from './types';
import { toRefs } from 'vue';
import { useXModalRawClasses } from './composables/useXModalRawClasses';

const emit = defineEmits<{
  (action: 'onUpdate:modelValue', payload: boolean): void;
  (action: 'update:modelValue', payload: boolean): void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    // eslint-disable-next-line vue/prop-name-casing
    'onUpdate:modelValue'?: void;
    disable?: boolean;
    position?: XModalRawPositionClassVariant;
    persistent?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    square?: boolean;
    maximized?: boolean;
    seamless?: boolean;
  }>(),
  {
    'onUpdate:modelValue': undefined,
    modelValue: false,
    disable: false,
    position: 'standard',
    persistent: false,
    fullWidth: false,
    fullHeight: false,
    square: false,
    maximized: false,
    seamless: false,
  }
);

const {
  wrapperActive,
  wrapperRoot,
  wrapperBackdrop,
  wrapperBackdropClick,
  wrapperShowing,
  wrapperClasses,
} = useXModalRawClasses(toRefs(props), emit);
</script>
