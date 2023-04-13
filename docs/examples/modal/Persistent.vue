<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="persistent = !persistent">Click Me</button>
  </div>

  <x-modal
    v-model="persistent"
    title="Persistent"
    persistent
  >
    <template #body>
      <span class="text-center">
        Click/Tap on the backdrop.
      </span>
    </template>
    <template #footer>
      <div class="flex justify-end gap-4 items-center flex-wrap">
        <button type="button" class="rounded-md bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="persistent = !persistent">Ok</button>
      </div>
    </template>
  </x-modal>
</template>

<script setup lang="ts">
import { XModal } from '@/components/modal';
import { ref } from 'vue';

const persistent = ref(false);

</script>
