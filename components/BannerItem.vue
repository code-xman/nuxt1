<template>
  <div class="banner-item flex">
    <Item
      v-for="item in data"
      :key="item.key"
      :data="item"
      :className="{
        'text-md': true,
      }"
    />
  </div>
</template>

<script setup>
import { Item, } from '#components';

defineOptions({
  name: 'BannerItem',
});

const props = defineProps({
  data: {
    type: Object,
    default: () => [],
  },
});

</script>

<style lang="scss" scoped></style>
