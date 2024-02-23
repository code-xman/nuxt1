<template>
  <div class="full-x flex main-around">
    <div
      class="item flex center"
      :class="{ column: props.type === 'y', ...props.className }"
      @click="clickFn"
    >
      <UIcon v-if="data.icon" :name="data.icon" class="icon m-20" />
      <img
        v-else-if="data.imgSrc"
        :src="data.imgSrc"
        :class="data.class || {'w-14': true, 'mx-20': true}"
      />
      <div v-if="data.title" class="text">
        <p
          class="title"
          v-bind="data.title.attrs || { class: ['text-xl', 'font-bold'] }"
        >
          {{ data.title.text }}
        </p>
        <p
          v-if="data.sub"
          v-bind="data.sub.attrs || { class: ['text-md'] }"
          clas="sub"
        >
          {{ data.sub.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'item',
});

const emits = defineEmits(['click']);

const props = defineProps({
  type: {
    type: String,
    default: 'x',
  },
  className: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Object,
    default: () => ({
      icon: '',
      title: '',
      sub: '',
    }),
  },
});

const clickFn = () => {
  emits('click', props.data);
};
</script>

<style lang="scss" scoped>
.item {
  // .icon {
  //   font-size: 32px;
  // }
  // .text {
  //   font-size: 14px;
  // }

  &.active {
    font-weight: 700;
  }
}
</style>
