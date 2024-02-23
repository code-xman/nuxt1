<template>
  <div class="full flex column">
    <AppHeader />
    <div class="content flex-1 overflow-auto">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content {
  height: calc(100% - 36px);
  background: #F9F9F9;
}
.dark {
  .content {
    background: #090909;
  }
}
</style>
