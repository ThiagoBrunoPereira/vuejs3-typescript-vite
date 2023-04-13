---
title: Modal | Components | Guide
---

# XModal
Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.

Potabilis UI provides a large variety of styles and properties for the `XModal` component like sizes, maximized, icons, positions and others.

It is also possible change de slots from header, body, footer, loading and prompt.

## Overview

```HTML
<x-modal [...props] />
```

```typescript
interface UseButtonClassesProps {
  size: XModalSize;
  modelValue?: boolean;
  title: string;
  titleClass?: string;
  bodyClass?: string;
  position?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  overflowVisible?: boolean;
  initialLoading?: boolean;
  iconLeft?: string;
  iconRight?: string;
  loadingInputs?: boolean;
  loadingText?: boolean;
  tooltipIcon?: string;
  isOverflowVisible?: boolean;
  seamless?: boolean;
  persistent?: boolean;
  maximized?: boolean;
  fullWidth?: boolean;
}
```

## Basic

<doc-example title="Basic" file="modal/Basic" />

## Size
- With the `size` property, you can choose the size of the modal, by default it uses "md".
```typescript
type XModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

defineProps<{
  size: XModalSize;
}>(),
{
  size: 'md',
}
```

<doc-example title="Size Modals" file="modal/Size" />

### Custom Size
- Also you can customize size passing a specific number of pixel.

```html
  <x-modal
    v-model="showModal"
    :size="300"
  >
    <template #body>
      <span class="text-center">
        Click/Tap on the backdrop.
      </span>
    </template>
  </x-modal>
```

<doc-example title="Custom Size Modals" file="modal/CustomSize" />

## Positioning
- With the `position` property, the modal position can be chosen, by default it uses "standard".

<doc-example title="Positions" file="modal/Positions" />

## Maximized
- Put Modal into maximized mode

<doc-example title="Maximized" file="modal/Maximized" />

## Handling scroll
- Enables scrollbar inside the modal.

<doc-example title="Handling scroll" file="modal/HandlingScroll" />

## Persistent
User cannot dismiss the Dialog by pressing ESCAPE key or by clicking/tapping on its backdrop.

<doc-example title="Persistent" file="modal/Persistent" />

## Seamless
XModal can also be a part of the page, without requiring immediate focus. It’s where “seamless” mode comes into play:

<doc-example title="Seamless" file="modal/Seamless" />

<script setup lang="ts">
import DocExample from '@components/DocExample.vue';
</script>