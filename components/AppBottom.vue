<template>
  <div class="AppBottom border-b">
    <div class="item">
      <p>网站导航</p>
      <div class="line"></div>
      <div class="tabs flex cross-center">
        <span class="tab" @click="topage('index')">首页</span>
        <span>|</span>
        <span class="tab" @click="topage('Product')">产品中心</span>
        <span>|</span>
        <span class="tab" @click="topage('Solution')">解决方案</span>
        <span>|</span>
        <span class="tab" @click="topage('About')">关于我们</span>
      </div>
    </div>
    <div class="item">
      <p>联系我们</p>
      <div class="line"></div>
      <div class="flex cross-center py-10">
        <img :src="mail" class="mr-10" />
        market@qlxjr.com
      </div>
    </div>
    <div class="item">
      <p>关注我们</p>
      <div class="line"></div>
      <div class="flex cross-center py-10">
        <div class="mr-20">
          <img :src="gzh" class="w-24" />
          商务对接企业微信
        </div>
        <div>
          <img :src="wx" class="w-24" />
          关注公众号
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import mail from '~/assets/image/首页/mail.svg';
import gzh from '~/assets/image/gzh.svg';
import wx from '~/assets/image/wx.svg';

defineOptions({
  name: 'AppBottom',
});

const router = useRouter();

const topage = (name) => {
  router.push({ name });
};
</script>

<style lang="scss" scoped>
.AppBottom {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0a2336;
  color: #fff;

  .tabs {
    margin-left: -20px;
  }

  .line {
    margin-top: 10px;
    width: 30px;
    border-bottom: 2px solid #fff;
  }
  .tab {
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>
