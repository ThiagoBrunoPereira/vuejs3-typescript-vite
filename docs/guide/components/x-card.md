---
title: Card | Components | Guide
---

# Card

The XCard component is a great way to display important pieces of grouped content. This pattern is quickly emerging as a core design pattern for Apps, website previews and email content. It assists the viewer by containing and organizing information, while also setting up predictable expectations.

## Overview

#### XCard

```typescript
type CardTypeVariant = 'div' | 'span' | 'section' | 'aside' | 'nav' | 'footer';

interface UseCardClassesProps {
  tag?: CardTypeVariant;
  square?: boolean;
  flat?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}
```

#### XCardSection

```typescript
type CardTypeVariant = 'div' | 'span' | 'section' | 'aside' | 'nav' | 'footer';

interface UseCardClassesProps {
  tag: CardTypeVariant;
  horizontal: boolean;
}
```

## Basic Cards

<doc-example title="Basic Cards" file="card/Basic" />

## Hoverable

<doc-example title="Hoverable" file="card/Hoverable" />

## Flat

<doc-example title="Flat" file="card/Flat" />

## Media Content

<doc-example title="Media Content" file="card/MediaContent" />

---

This section component is inspired on [Quasar Card](https://quasar.dev/vue-components/card).

<script setup lang="ts">
import DocExample from '@components/DocExample.vue';
</script>
