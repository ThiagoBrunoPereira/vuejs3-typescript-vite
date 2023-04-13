<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleClick('top')">
      
      <ArrowUpCircleIcon class="h-6 w-6 text-white" />

    </button>
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleClick('bottom')">
      <ArrowDownCircleIcon class="h-6 w-6 text-white" />
    </button>
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleClick('left')">
      <ArrowLeftCircleIcon class="h-6 w-6 text-white" />
    </button>
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleClick('right')">
      <ArrowRightCircleIcon class="h-6 w-6 text-white" />
    </button>
  </div>

  <x-modal
    v-model="showModal"
    :title="positionModal"
    :position="positionModal"
    no-footer
  >
    <template #body>
      <h1>Alert</h1>
      <span class="text-center">
        {{ lorem }}
      </span>
    </template>
  </x-modal>
</template>

<script setup lang="ts">
import { ArrowDownCircleIcon, ArrowLeftCircleIcon, ArrowUpCircleIcon, ArrowRightCircleIcon  } from "@heroicons/vue/24/outline";
import { XModal } from '@/components/modal';
import { XModalRawPositionClassVariant } from '@/components/modal/types';
import { ref } from 'vue';

const showModal = ref(false);
const positionModal = ref();

const handleClick = ((position: XModalRawPositionClassVariant) => {
  showModal.value = !showModal.value
  positionModal.value = position
});

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

</script>
