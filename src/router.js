import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Reg from './views/Reg.vue';
import StockBar from './views/StockBar.vue';
import Trade from './views/Trade.vue';
import Post from './views/Post.vue';
import Forget from './views/Forget.vue';
import Aupload from './upload/Aupload.vue';
import Count from './views/Count.vue';
import Information from './views/Information.vue';
import Information_2 from './views/Information_2.vue';
import EChart from './components/EChart.vue';




Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
      path:'/reg',
      name:'reg',
      component:Reg
    },
    {
        path:'/post/:id',
        name:'post',
        component:Post
    },
    {
      path:'/trade',
      name:'trade',
      component:Trade
    },
    {
      path:'/upload',
      name:'upload',
      component: Aupload
    },
    {
      path:'/count',
      name:'count',
      component: Count,
    },
    {
      path:'/information',
      name:'information',
      component: Information,
    },
    {
      path:'/information-2',
      name:'information-2',
      component: Information_2,
    },
    {
      path:'/forget',
      name:'forget',
      component: Forget,
    },
    {
      path:'/echart',
      name:'echart',
      component: EChart,
    },
  ],
});
