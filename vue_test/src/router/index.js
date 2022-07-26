// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"
//引入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建一个路由器并暴露一个路由器，路由器管理的是一堆路由，每一个路由都是一个配置对象
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})


