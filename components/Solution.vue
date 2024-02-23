<!-- 解决方案 item -->
<template>
  <div class="solution flex">
    <div class="title mb-10">{{ data.title }}</div>
    <div class="content flex-1 flex wrap">
      <div
        v-for="(item, index) in data.list"
        :key="index"
        class="item ml-10 mb-10 p-40"
      >
        <Item
          :className="{ 'main-start': true, 'full-x': true }"
          :data="{ ...item, class: { 'w-12': true, 'mr-4': true } }"
        />
        <p>{{ item.detail }}</p>
        <div class="text-right">
          <UButton color="primary" variant="link">查看详情 >></UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Item } from '#components';

defineOptions({
  name: 'Solution',
});

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.solution {
  .title {
    flex-shrink: 0;
    border-radius: 20px;
    width: 300px;
    line-height: 52px;
    padding: 40px;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0px;
    background: #f2f2f2;
  }
  .content {
    .item {
      border-radius: 20px;
      width: calc((100% - 10px * 3) / 3);
      background: #ffffff;
    }
  }
}
.dark {
  .solution {
    .title {
      background: #1f2937;
    }
    .item {
      background: #475569;
    }
  }
}
</style>
