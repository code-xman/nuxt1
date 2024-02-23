<template>
  <div class="">
    Product
    <AppBottom />
  </div>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});
</script>

<style lang="scss" scoped></style>
