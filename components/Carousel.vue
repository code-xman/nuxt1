<template>
  <UCarousel
    v-slot="{ item }"
    :items="data"
    :ui="{ item: 'basis-full' }"
    class="overflow-hidden"
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>

<script setup>
defineOptions({
  name: 'Carousel',
});

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
