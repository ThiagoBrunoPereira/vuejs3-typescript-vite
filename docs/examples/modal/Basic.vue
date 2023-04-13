<template>
  <div class="flex gap-4 items-center flex-wrap">
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="alert = !alert">ALERT</button>
    <button type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="confirm = !confirm">CONFIRM</button>
  </div>

  <x-modal
    v-model="alert"
    title="Alert"
  >
    <template #body>
      <span class="text-center">
        {{ lorem }}
      </span>
    </template>
    <template #footer>
      <div class="flex justify-end gap-4 items-center flex-wrap">
        <button type="button" class="rounded-lg bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="(alert = !alert)">Ok</button>
      </div>
    </template>
  </x-modal>

  <x-modal
    v-model="confirm"
    title="Confirm"
  >
    <template #body>
      <span class="text-center">
        {{ lorem }}
      </span>
    </template>
    <template #footer>
      <div class="flex justify-end gap-4 items-center flex-wrap">
        <button type="button" label="Cancel" color="primary" @click="(confirm = !confirm)" />
        <button type="button" label="Ok" color="primary" @click="confirm = !confirm" />
      </div>
    </template>
  </x-modal>
</template>

<script setup lang="ts">
import { XModal } from '@/components/modal';
import { ref } from 'vue';

const alert = ref(false);
const confirm = ref(false);

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

</script>
