<template>
<!--把样式结构从原来的html，css文件复制到这后然后进行拆分，先拆结构然后再拆解样式 -->
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
            <!-- 给myheader添加了一个自定义事件叫做addtodo -->
            <MyHeader @addTodo = "addTodo"></MyHeader>
            <!-- 给list传todos，list怎么接收呢，通过props来接收,然后就会出现在mylist的vc身上就可以直接用了 -->
            <MyList :todos="todos" @checkTodo="checkTodo" @deleteTodo="deleteTodo"></MyList>
            <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    //item包含在MyList中所以就不用引入item
    import MyList from './components/MyList.vue'
    
export default {
    name:'App',
    components:{MyHeader,MyList,MyFooter},
    data() {
        return {
            //如果什么都没有返回的是null后面获取length报错，所以这里添加个空数组
            todos:JSON.parse(localStorage.getItem('todos'))||[]
        }
    },
    methods: {

        // 父亲给儿子一个函数addTodo，儿子调用传参
        //这些方法最终都导致了todos发生了改变，todos发生改变页面中用到todos的就会自动更新
        addTodo(todoObj){
            this.todos.unshift(todoObj) 
        },
        //勾选or取消勾选一个todo
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.done =!todo.done
            })
        },
        //删除一个todo
        deleteTodo(id){
            this.todos = this.todos.filter((todo)=>{
                return todo.id != id
            })
        },
        //全选or取消全选
		checkAllTodo(done){
            this.todos.forEach((todo)=>{
                todo.done = done
            })
		},
        clearAllTodo(){
            //filter用于对数组进行过滤。它创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
            //这里只有为true时候才返回当前遍历项,要选出未完成的数组
            this.todos = this.todos.filter((todo)=>{
                console.log(todo.id+","+todo.done)
                return !todo.done
            })
        },
        updateTodo(id,title){
             this.todos.forEach((todo)=>{
                if(todo.id === id) todo.title =title
            })
        }
    },
    //监视属性只要todos发生改变就会监测到，但是不会监视到是否有没有勾选，如果要监视到必须要深度监视
    watch:{
        // todos(value){
        //     localStorage.setItem('todos',JSON.stringify(value))
        // }
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },

    // 收数据的人应该绑定事件身上的自定义事件总线，mounted，一挂好就绑定，绑定好以后就要写触发什么时候触发，去item中触发
    mounted() {
        this.$bus.$on('checkTodo',this.checkTodo)
        this.$bus.$on('deleteTodo',this.deleteTodo)
        this.$bus.$on('updateTodo',this.updateTodo)
    },
    //在组件销毁前进行解绑
    beforeDestroy() {
        this.$bus.$off('checkTodo')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('updateTodo')
    },
}
</script>

<style >
/*base*/  
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  margin-right: 5px;
  color: #fff;
  background-color: skyblue;
  border: 1px solid white;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>