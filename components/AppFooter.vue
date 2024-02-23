<template>
  <div class="app-footer text-white">
    <div class="copyright">
      Copyright &copy; 版权所有 - 重庆钱流科技有限公司 -
      ICP备案号/许可证号:
      <a
        href="https://beian.miit.gov.cn"
        rel="nofollow"
        target="_blank"
        class="text-primary-500"
      >
        渝ICP备19002398号-1
      </a>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'AppFooter' });
</script>

<style lang="scss" scoped>
.app-footer {
  // position: absolute;
  // left: 0;
  // bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a2336;

  .copyright {
    font-size: 12px;
    line-height: 20px;
    padding: 8px;

    a {
      font-size: inherit;
      font-weight: bold;
    }
  }
}
</style>
