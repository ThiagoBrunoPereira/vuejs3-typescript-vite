<template>
  <div class="px-4 py-2 bg-zinc-300 dark:bg-slate-100/10 rounded-xl">
    <div class="flex justify-end">
      <div class="flex gap-4">
        <button
          class="flex justify-center gap-4 text-slate-700"
          :disabled="loadingSource"
          @click="() => (expanded = !expanded)"
        >
          View Source
          <CodeBracketIcon class="h-6 w-6" />
      </button>
      </div>
    </div>
  </div>
  <div v-if="!loadingSource && !loadingComponent" class="py-4">
    <component :is="component" />
    <div v-show="expanded" class="py-4">
      <div class="flex">
        <div
          v-for="item in Object.keys(def.parts).filter(part => def.parts[part].length > 0)"
          :key="item"
          class="p-4 cursor-pointer hover:bg-[#1d1d1d]/95 hover:dark:bg-[#292d3e]/95 hover:text-white rounded-t-lg"
          :class="[
            {
              'bg-[#1d1d1d] dark:bg-[#292d3e] text-white': codeSelected === item,
            }
          ]"
          @click="codeSelected = item">
          {{item}}
        </div>
      </div>
      <doc-code
        lang="html"
        :code="(def.parts[codeSelected] as string)"
        max-height="70vh"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw, onMounted, reactive, ref } from 'vue';
import DocCode from './DocCode.vue';
import { CodeBracketIcon } from "@heroicons/vue/20/solid";

const importExampleComponent = import.meta.glob('@examples/**/*.vue');
const importExampleComponentRaw = import.meta.glob('@examples/**/*.vue', {
  as: 'raw',
});

const props = defineProps<{
  file: string;
  title: string;
}>();

const loadingSource = ref(true);
const loadingComponent = ref(true);
const component = ref(null);

const def = reactive<{
  tabs: string[];
  parts: {
    Template?: string;
    Script?: string;
    Style?: string;
    All?: string;
  };
}>({
  tabs: [],
  parts: {},
});

const expanded = ref(false);

const codeSelected = ref('Template');

const parseTemplate = (target, template) => {
  const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
    regex = new RegExp(string, 'g'),
    parsed = regex.exec(template) || [];

  return parsed[1] || '';
};

const parseComponent = (comp) => {
  def.parts = {
    Template: parseTemplate('template', comp),
    Script: parseTemplate('script', comp),
    Style: parseTemplate('style', comp),
  };

  const tabs = ['Template', 'Script', 'Style'].filter(
    (type) => def.parts[type]
  );

  if (tabs.length > 1) {
    def.parts.All = comp;
    tabs.push('All');
  }

  def.tabs = tabs;
};

const openGitHub = () => {
  window.open(`${github}/tree/main/docs/examples/${props.file}.vue`, '_blank');
};

onMounted(() => {
  if (!importExampleComponent[`/examples/${props.file}.vue`]) {
    console.error(`Example component not found: ${props.file}`);
    return;
  }

  importExampleComponent[`/examples/${props.file}.vue`]().then((comp) => {
    component.value = markRaw(comp.default);
    loadingComponent.value = false;
  });

  importExampleComponentRaw[`/examples/${props.file}.vue`]().then((comp) => {
    parseComponent(comp);
    loadingSource.value = false;
  });
});
</script>
