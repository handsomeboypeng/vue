<template>
	<div class="app">
		<!-- 原则：你给谁绑定的自定义事件就找谁触发事件，你给谁绑的自定义事件就找谁解绑去 -->
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
		<!-- 一个是用props一层一层传过去，另一个是直接丢过去 -->
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<!-- @click.native 原生click dom事件，这样写以后就把click事件交给studet组件最外侧的元素也就是div -->
		<Student ref="student" @click.native="show"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params){
				console.log('App收到了学生名：',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		//mounted写在哪个组件里面就是哪个组件挂载完毕，app挂载完毕
		mounted() {
			//this.$refs.student拿到student的实例对象，$on('atguigu',this.getStudentName)表示当atguigu被触发的时候执行回调
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
