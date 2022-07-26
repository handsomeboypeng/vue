//1.首先我们要用到vue得引入vue，然后引入所有组件的外壳组件app.vue，关闭生产提示
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})