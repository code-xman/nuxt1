// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false, // 是否开启底部 devtools
  },
  devServer: {
    host: `192.168.101.29`, // 这里仅能使用 `` 进行包裹
    port: 8085,
  },
  css: ['@/assets/style/common.scss'], // 引入公共样式
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // false:仅根据组件名称而不是路径自动导入组件
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/const.scss";', // 引入公共样式变量
        },
      },
    },
  }
});
