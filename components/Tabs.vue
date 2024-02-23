<template>
  <div class="tabs ">
    <div
      class="tab-list flex bg-gray-100 dark:bg-gray-800 py-5 pl-5 w-full"
    >
      <Item
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :className="{
          'pointer': true,
          'relativeinline-flex': true,
          'inline-flex': true,
          'items-center': true,
          'justify-center': true,
          'flex-shrink-0': true,
          'flex-1': true,
          'ui-focus-visible:outline-0': true,
          'ui-focus-visible:ring-2': true,
          'ui-focus-visible:ring-primary-500': true,
          'dark:ui-focus-visible:ring-primary-400': true,
          'ui-not-focus-visible:outline-none': true,
          'focus:outline-none': true,
          'transition-colors': true,
          'duration-200': true,
          'ease-out': true,
          'mr-5': true,
          'px-5': true,
          'text-xl': true,
          'font-medium': true,
          'rounded-md': true,
          'text-gray-900': true,
          'dark:text-white': true,
          'active': item.key === select.key,
          'bg-white': item.key === select.key,
          'dark:bg-slate-600': item.key === select.key,
        }"
        @click="clickFn"
      />
    </div>
    <component
      v-if="select.content"
      :is="select.content.tag"
      v-bind="select.content.attrs || {}"
      :data="select.content.data"
    />
  </div>
</template>

<script setup>
import { ref, shallowRef, } from 'vue';
import { Item, } from '#components';

defineOptions({
  name: 'Tabs',
});

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const select = shallowRef(props.data[0]);

const clickFn = (row) => {
  select.value = row;
};
</script>

<style lang="scss" scoped></style>
