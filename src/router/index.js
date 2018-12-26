import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'IndexView',
      component: resolve => require(['@/pages/index/index.vue'], resolve),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/buy',
      name: 'index_buy',
      component: resolve => require(['@/pages/index/buy.vue'], resolve),
      meta: {
        title: '购物',
      },
    },
    {
      path: '/order/list',
      name: 'order_list',
      component: resolve => require(['@/pages/order/list'], resolve),
      meta: {
        title: '订单',
      },
    },
  ],
});
