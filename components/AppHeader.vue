<template>
  <div class="app-header flex cross-center p-10">
    <div>LOGO</div>
    <p class="frozen">链接助贷机构，让业务更简单</p>
    <div class="flex-1"></div>
    <div>
      <UHorizontalNavigation :links="links">
        <template #icon="{ link }">
          <UIcon
            v-if="link.icon"
            :name="link.icon"
            class="group-hover:text-primary h-6 text-lg pl-30"
          />
        </template>
        <template #default="{ link }">
          <span class="group-hover:text-primary relative text-lg pr-15">
            {{ link.label }}
          </span>
        </template>
      </UHorizontalNavigation>
    </div>
    <!-- <UButton
      :ui="{ rounded: 'rounded-full' }"
      :icon="'i-heroicons-chat-bubble-left-right-20-solid'"
      class="py-10 px-30"
      @click="oaFn"
    >
      官网公众号
    </UButton>
    <UButton
      :ui="{ rounded: 'rounded-full' }"
      :icon="'i-heroicons-phone-20-solid'"
      class="py-10 px-30"
      @click="phoneFn"
    >
      联系我们
    </UButton> -->
    <ClientOnly>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
defineOptions({ name: 'AppHeader' });

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

const links = [
  {
    label: '首页',
    icon: 'i-heroicons-home-solid',
    to: '/',
    labelClass: 'px-10',
  },
  {
    label: '产品中心',
    icon: 'i-heroicons-chart-bar-solid',
    to: '/Product',
  },
  {
    label: '解决方案',
    icon: 'i-heroicons-rectangle-group-solid',
    to: '/Solution',
  },
  {
    label: '关于我们',
    icon: 'i-heroicons-user-group-solid',
    to: '/About',
  },
];

const oaFn = () => {
  console.log('官网公众号');
};

const phoneFn = () => {
  console.log('联系我们');
};
</script>

<style lang="scss" scoped>
.app-header > * {
  margin: 0 10px;
}
</style>
