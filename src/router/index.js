import Vue from 'vue';
import Router from 'vue-router';
import Templete from '@/pages/templete';
Vue.use(Router);

export default new Router({
  routes: [
    //局部滚动
    {
      path: '/',
      name: 'Index',
      component: Templete,
      redirect: '/index',
      children: [
        // {
        //   path: '/order/list',
        //   name: 'order_list',
        //   component: resolve => require(['@/pages/order/list'], resolve),
        //   meta: {
        //     title: '订单',
        //   },
        // },
      ],
    },
    {
      path: '/order/list',
      name: 'order_list',
      component: resolve => require(['@/pages/order/list'], resolve),
      meta: {
        title: '订单',
      },
    },
    {
      path: '/index',
      name: 'IndexView',
      component: resolve => require(['@/pages/index/index.vue'], resolve),
      meta: {
        title: '首页',
      },
    },
  ],
});
