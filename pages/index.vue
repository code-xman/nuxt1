<template>
  <div class="home">
    <div v-for="item in data" :class="item.class || ['mb-40', 'px-80']">
      <component :is="item.tag" v-bind="item.attrs" :data="item.data" />
    </div>
    <AppBottom/>
  </div>
</template>

<script setup>
import {
  Carousel,
  BannerItem,
  NTitle,
  Tabs,
  Item,
  Solution,
} from '#components';
import banner from '~/assets/image/banner.svg';
import icon1 from '~/assets/image/icon1.svg';
import icon2 from '~/assets/image/icon2.svg';
import notarization from '~/assets/image/notarization.svg';
import product from '~/assets/image/product.svg';

const data = [
  {
    tag: Carousel,
    data: [banner],
    class: ['mb-40', 'px-0'],
  },
  {
    tag: BannerItem,
    data: [
      {
        imgSrc: icon1,
        key: 'product1',
        title: {
          text: '产品优势',
        },
        sub: {
          text: '广告获客、产品中心',
        },
      },
      {
        imgSrc: icon1,
        key: 'product2',
        title: {
          text: '产品优势',
        },
        sub: {
          text: '广告获客、产品中心',
        },
      },
      {
        imgSrc: icon1,
        key: 'product3',
        title: {
          text: '产品优势',
        },
        sub: {
          text: '广告获客、产品中心',
        },
      },
      {
        imgSrc: icon1,
        key: 'product4',
        title: {
          text: '产品优势',
        },
        sub: {
          text: '广告获客、产品中心',
        },
      },
    ],
  },
  {
    tag: NTitle,
    data: {
      main: {
        text: '热门产品推荐',
      },
      sub: {
        text: '链接助贷机构，让业务更简单',
      },
    },
  },
  {
    tag: Tabs,
    data: [
      {
        key: 'product1',
        imgSrc: icon1,
        title: {
          text: '流量站',
          attrs: {
            class: ['text-xl'],
          },
        },
        content: {
          tag: Item,
          attrs: {
            className: { 'w-full': true, 'py-10': true },
          },
          data: {
            imgSrc: notarization,
            key: 'product1',
            class: ['w-1/3'],
            title: {
              text: '流量站',
              attrs: {
                class: ['text-4xl', 'mb-20'],
              },
            },
            sub: {
              text: '多平台合规流量：抖音广告、腾讯广告、头部拒量/尾量、短信流量，一站式获客引流工具，1手流量，1对1推送。',
              attrs: {
                class: ['max-w-96'],
              },
            },
          },
        },
      },
      {
        key: 'product2',
        imgSrc: icon2,
        title: {
          text: '产品库',
          attrs: {
            class: ['text-xl'],
          },
        },
        content: {
          tag: Item,
          attrs: {
            className: { 'w-full': true, 'py-10': true },
          },
          data: {
            imgSrc: product,
            key: 'product1',
            class: ['w-1/3'],
            title: {
              text: '产品库',
              attrs: {
                class: ['text-4xl', 'mb-20'],
              },
            },
            sub: {
              text: '多个银行贷款产品进件通道，高返佣、佣金日结。融资顾问1对1服务，一键匹配精准产品。',
              attrs: {
                class: ['max-w-96'],
              },
            },
          },
        },
      },
      {
        key: 'product3',
        imgSrc: icon1,
        title: {
          text: '签约宝',
          attrs: {
            class: ['text-xl'],
          },
        },
        content: {
          tag: Item,
          attrs: {
            className: { 'w-full': true, 'py-10': true },
          },
          data: {
            imgSrc: notarization,
            key: 'product1',
            class: ['w-1/3'],
            title: {
              text: '签约宝',
              attrs: {
                class: ['text-4xl', 'mb-20'],
              },
            },
            sub: {
              text: '放款签约系统：为金融机构提供从进件到放款的合规经营工具，支持多类场景及不动产在线抵押。',
              attrs: {
                class: ['max-w-96'],
              },
            },
          },
        },
      },
    ],
  },
  {
    tag: NTitle,
    data: {
      main: {
        text: '解决方案',
      },
      sub: {
        text: '链接助贷机构，让业务更简单',
      },
    },
  },
  {
    tag: Solution,
    class: ['px-80'],
    data: {
      title: '赎楼场景',
      list: [
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },

          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },

          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },

          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },

          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
      ],
    },
  },
  {
    tag: Solution,
    class: ['px-80'],
    data: {
      title: '消费分期场景',
      detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
      list: [
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
      ],
    },
  },
  {
    tag: Solution,
    data: {
      title: '普惠场景',
      detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
      list: [
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
        {
          imgSrc: icon1,
          title: {
            text: '产品优势',
          },
          detail: '围绕赎楼、消费分期场景提供房屋和个人/企业的评估报告',
        },
      ],
    },
  },
];
</script>

<style lang="scss" scoped>
// .home {
//   background: #F5F6F8;
// }
</style>
