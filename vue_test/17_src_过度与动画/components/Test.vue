<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- 如果在vue中，你想让谁有动画效果你就给谁用一个transition包裹起来 -->
		<transition name="hello" appear>
			<h1 v-show="isShow">你好啊！</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	/* transitionname-enter-active进来的时候 */
	.hello-enter-active{
		animation: atguigu 0.5s linear;
	}
	/* transitionname-leave-active出去的时候 */
	.hello-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>