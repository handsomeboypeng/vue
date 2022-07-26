<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            	<span v-show="!todo.isEdit">{{todo.title}}</span>
              <input 
                type="text" 
                v-show="todo.isEdit" 
                :value="todo.title" 
                @blur="handleBlur(todo,$event)"
                ref="inputTitle"  
              >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)"> 编辑 </button>
    </li>
</template>

<script scoped>
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo'],
    // 数据在哪里操作数据的方法就在哪里，todos在app中对todos的增删查改都应该在app中
    methods: {
        handleCheck(id) {
            this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id) {
            if(confirm("确定删除吗？")){
                this.$bus.$emit('deleteTodo',id)
            }
        },
        handleEdit(todo){
          if(todo.hasOwnProperty('isEdit')) {
            todo.isEdit = true
          } else {
          //这么给todo身上添加isEdit就是一个响应式的了,之前的属性是已经准备好了，并且是调用的数组的unshift这些方法,
          //Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。
          this.$set(todo,'isEdit',true)
          //这里不要用v-model，因为todo是prop里面的属性，vue不建议这样做
          }
          //拿到inputTitle这个dom,这么input框是不会获取到焦点，因为handleEdit执行完成后再去渲染input，focus在前面
          //执行了，解决办法可以给一个延时也可以参考官方提供的方法$nextTick下一轮再执行，意思就是数据改变dom更新后再执行这个
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
        },
        handleBlur(todo,e){
          todo.isEdit = false
          if(!e.target.value) return alert("输入不能为空")
          this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
    background-color: skyblue;
}

li:hover button {
    display: inline-block;
}

</style>