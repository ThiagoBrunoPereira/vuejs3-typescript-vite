<template>
  <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden">
    <div
      class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
      style="background-position: 10px 10px"
    ></div>
    <div class="relative rounded-xl overflow-auto p-8">
      <div class="flex items-center justify-around gap-4 font-mono font-bold">
        <slot />
      </div>
    </div>
    <div
      class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"
    ></div>
  </div>
</template>
