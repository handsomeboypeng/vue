<template>
    <div class="todo-header">
        <!-- @keyup.enter 鼠标回车 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title"  @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
        return {
            title:''
        }
    },
    methods: {
        add(e) {
            if(!this.title.trim()) return alert('输入不能为空')
            const todoObj = {id:nanoid(),title:this.title,done:false}
            //这里的this还是header，只不过header和app里的received方法引用地址相同，你在header里面调用了，也相当于在app中调用了
            this.$emit('addTodo',todoObj);
            this.title = ''
    } 
}
}
// 怎么获取用户的输入，有两个办法, 1.method里面用event，通过event.target.value拿到 2.通过v-model进行双向数据绑定,data()里必须有v-model的值
// 1. methods: {
//     add(event) {
//         console.log(event.target.value)
//     } 
// 2. data() {
//         return {
//             title:''
//         }
//     },
//     methods: {
//     add() {
//         console.log(this.title)
//     } 


</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>