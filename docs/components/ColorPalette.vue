<template>
  <div
    class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
  >
    <div class="w-16 shrink-0">
      <div class="h-10 flex flex-col justify-center">
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-200">
          {{ colorName }}
        </div>
      </div>
    </div>
    <div
      class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2"
    >
      <div class="relative flex">
        <div class="space-y-1.5 cursor-pointer">
          <div
            class="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
            :style="`background-color: ${colorHex};`"
          ></div>
          <div
            class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block"
          >
            <div class="text-slate-500 font-mono lowercase dark:text-slate-400">
              {{ colorHex }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  colorName: string;
  colorHex: string;
}>();
</script>
