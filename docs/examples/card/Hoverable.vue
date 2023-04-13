<template>
  <div class="grid grid-cols-2 gap-4">
    <x-card hoverable bordered>
      <x-card-section>
        {{ lorem }}
      </x-card-section>
    </x-card>

    <x-card hoverable bordered>
      <x-card-section>
        <div class="text-xl">This is the best title</div>
        <div class="text-sm">by Thiago Pereira</div>
      </x-card-section>

      <hr />

      <x-card-section>
        {{ lorem }}
      </x-card-section>
    </x-card>

    <x-card flat bordered hoverable>
      <x-card-section>
        <div class="text-xl">This is the best title</div>
      </x-card-section>

      <x-card-section class="pt-0">
        {{ lorem.substring(0, 120) }}.
      </x-card-section>

      <hr class="!mx-4" />

      <x-card-section> {{ lorem.substring(0, 120) }}. </x-card-section>
    </x-card>
  </div>
</template>

<script setup lang="ts">
import { XCard, XCardSection } from '@/components/card';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
</script>
