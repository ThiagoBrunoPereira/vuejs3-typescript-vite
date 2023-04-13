<template>
  <div class="flex gap-4 flex-wrap items-start">
    <x-card bordered class="my-card">
      <img src="https://placeimg.com/500/300/nature" height="200px" />

      <x-card-section>
        <div class="text-xl">This is the best title</div>
        <div class="text-sm">by Thiago Pereira</div>
      </x-card-section>

      <x-card-section>
        {{ lorem }}
      </x-card-section>
    </x-card>

    <x-card bordered class="my-card">
      <img src="https://placeimg.com/500/300/nature" height="200px" />

      <x-card-section>
        {{ lorem }}
      </x-card-section>
    </x-card>

  </div>
</template>

<script setup lang="ts">
import { XCard, XCardSection } from '@/components/card';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
