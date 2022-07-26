<template>
	<div>
		<!-- 1）父组件想要向子组件传值时，那么需要在子组件引入的地方绑定一个属性，属性值就是要传的数据，并且要在父组件中引入子组件。
             2）这个自定义属性的属性值是用来存放父组件向子组件传递的数据。 -->
		<!-- 加：后面的就是表达式可参与运算：age = “18+1” -->
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
