import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button,Select,Option,Carousel,CarouselItem,Upload,Dialog,Tabs,TabPane,Input,Form,FormItem,Radio,RadioGroup} from 'element-ui';
import '@/assets/css/reset.css'
import '@/mock/mock.js'
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts//引入组件




Vue.use(Select).use(Option).use(RadioGroup).use(Radio).use(Button).use(Carousel).use(CarouselItem).use(Upload).use(Dialog).use(Tabs).use(TabPane).use(Input).use(Form).use(FormItem);
// Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
