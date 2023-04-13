<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleSize(300)">CUSTOM SIZE</button>
  </div>

  <x-modal
    v-model="showModal"
    :title="sizeModal + 'px'"
    :size="sizeModal"
  >
    <template #body>
      <span class="text-center">
        Click/Tap on the backdrop.
      </span>
    </template>
  </x-modal>
</template>

<script setup lang="ts">
import { XModal } from '@/components/modal';
import { ref } from 'vue';

const showModal = ref(false);
const sizeModal = ref();

const handleSize = ((size: string | number) => {
  showModal.value = !showModal.value
  sizeModal.value = size
});
</script>
