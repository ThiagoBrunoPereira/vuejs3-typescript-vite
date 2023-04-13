<template>
  <x-modal-raw
    v-model="open"
    :position="position"
    :maximized="maximized"
    :seamless="seamless"
    :persistent="persistent"
    :full-width="fullWidth"
    :full-height="fullHeight"
  >
    <template #default>
      <x-card
        bordered
        class="min-w-auto"
        :class="[overflowVisibleClass, wrapperBindClasses]"
        :style="wrapperStyle"
      >
        <x-card-section v-if="!initialLoading && !noHeader">
          <slot name="header">
            <div class="flex justify-between items-center">
              <div class="flex-grow modal-title">
                <div class="flex justify-start items-center">
                  <div
                    v-if="!!iconLeft"
                    :class="iconLeft"
                    class="self-center mr-4 mt-1"
                  />
                  <h4 :class="titleClass" class="m-0" v-html="title" />
                  <div
                    v-if="!!iconRight"
                    :class="iconRight"
                    class="self-center ml-3 mt-1"
                  />
                </div>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="close"
                >
                  <XMarkIcon class="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </slot>
        </x-card-section>

        <hr v-if="!initialLoading && !noHeader" class="m-0" />

        <x-card-section
          v-if="!initialLoading"
          class="pt-2 pb-2"
          :class="[overflowVisibleClass, bodyClass]"
        >
          <slot name="prompt" />
          <slot name="body" />
        </x-card-section>

        <hr v-if="!noFooter && !initialLoading" class="m-0" />

        <x-card-section
          v-if="!noFooter && !initialLoading"
          class="pt-2 pb-2"
        >
          <slot name="footer" />
        </x-card-section>
        <slot v-if="initialLoading" name="loading" />
      </x-card>
    </template>
  </x-modal-raw>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { XCard, XCardSection } from '@/components/card';
import { XModalRawPositionClassVariant, XModalSize } from './types';
import { XModalRaw } from '@/components/modal';
import { toRefs } from 'vue';
import { useVModel } from '@vueuse/core';
import { useXModalClasses } from './composables/useXModalClasses';

const emit = defineEmits<{
  (action: 'closeModal'): void;
  (action: 'update:modelValue', payload: boolean): void;
}>();

const props = withDefaults(
  defineProps<{
    size?: XModalSize;
    modelValue?: boolean;
    title: string;
    titleClass?: string;
    bodyClass?: string;
    position?: XModalRawPositionClassVariant;
    noHeader?: boolean;
    noFooter?: boolean;
    overflowVisible?: boolean;
    initialLoading?: boolean;
    iconLeft?: string;
    iconRight?: string;
    tooltipIcon?: string;
    isOverflowVisible?: boolean;
    seamless?: boolean;
    persistent?: boolean;
    maximized?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
  }>(),
  {
    size: 'md',
    modelValue: false,
    title: '',
    titleClass: '',
    bodyClass: '',
    position: 'standard',
    noHeader: false,
    noFooter: false,
    overflowVisible: false,
    initialLoading: false,
    iconLeft: '',
    iconRight: '',
    tooltipIcon: '',
    isOverflowVisible: false,
    seamless: false,
    persistent: false,
    maximized: false,
    fullWidth: false,
    fullHeight: false,
  }
);

const open = useVModel(props, 'modelValue');

const { close, show, wrapperBindClasses, wrapperStyle, overflowVisibleClass } =
  useXModalClasses(toRefs(props), open, emit);

defineExpose({
  open,
  close,
  show,
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
