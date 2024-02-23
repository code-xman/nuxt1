<template>
  <div id="app">
    <!-- <NuxtWelcome /> -->

    <!-- 不同name使用不同的layout -->
    <!-- <NuxtLayout name="mode1"> -->
    <NuxtLayout>
      <!-- 基于当前路由的动态page -->
      <NuxtPage :page-key="(route) => route.fullPath"></NuxtPage>
    </NuxtLayout>
  </div>
</template>
