<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="basicScroll = !basicScroll">Basic Scroll</button>
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="fixed = !fixed">Fixed Size</button>
  </div>

  <x-modal
    v-model="basicScroll"
    title="Basic Scroll"
    no-footer
  >
    <template #body>
      <h1>Alert</h1>
      <span v-for="n in 20" :key="n">
        {{ lorem }}
      </span>
    </template>
  </x-modal>

  <x-modal
    v-model="fixed"
    title="Fixed Size"
    no-footer
  >
    <template #body>
      <h1>Alert</h1>
      <x-card-section class="h-96">
        <span v-for="n in 20" :key="n">
          {{ lorem }}
        </span>
      </x-card-section>

    </template>
  </x-modal>
</template>

<script setup lang="ts">
import { XCardSection } from '@/components/card';
import { XModal } from '@/components/modal';
import { ref } from 'vue';

const basicScroll = ref(false);
const fixed = ref(false);
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

</script>
