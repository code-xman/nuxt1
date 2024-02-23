<template>
  <div class="title flex column cross-center">
    <p class="main mb-10 text-body" v-bind="props.data.main.attrs">
      {{ props.data.main.text }}
    </p>
    <p class="sub" v-bind="props.data.sub.attrs">
      {{ props.data.sub.text }}
    </p>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Title',
});

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      main: {},
      sub: {},
    }),
  },
});
</script>

<style lang="scss" scoped>
.title {
  .main {
    font-size: 28px;
  }
  .sub {
    font-size: 16px;
  }
}
</style>
