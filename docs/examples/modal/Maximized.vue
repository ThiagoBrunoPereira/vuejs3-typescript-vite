<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="maximized = !maximized">Maximized</button>
  </div>

  <x-modal
    v-model="maximized"
    title="Maximized"
    maximized
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
import { XModal } from '@/components/modal';
import { ref } from 'vue';

const maximized = ref(false);
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

</script>
