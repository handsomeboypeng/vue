<template>
    <ul class="todo-main">
        <!--myitem写一个用v-for来进行遍历,:todo只有写了：才是表达式才会读v-for前面的todoobj，todoObj这是遍历时候的每一个对象-->
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'

export default {
    name:'MyList',
    components:{MyItem},  //引入组件
    props:['todos'] 
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>