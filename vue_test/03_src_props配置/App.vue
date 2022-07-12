<template>
	<div>
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
