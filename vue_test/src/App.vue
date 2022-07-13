<template>
<!--把样式结构从原来的html，css文件复制到这后然后进行拆分，先拆结构然后再拆解样式 -->
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
            <MyHeader :addTodo = "addTodo"></MyHeader>
            <!-- 给list传todos，list怎么接收呢，通过props来接收,然后就会出现在mylist的vc身上就可以直接用了 -->
            <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
            <MyFooter :todos="todos" :checkAllTodo="checkAllTodo"></MyFooter>
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
            todos:[
                {id:'001',title:'抽烟',done:true},
                {id:'002',title:'喝酒',done:false},
                {id:'003',title:'开车',done:true}
            ]
        }
    },
    methods: {
        // 父亲给儿子一个函数addTodo，儿子调用传参
        addTodo(todoObj){
            this.todos.unshift(todoObj) 
        },
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.done =!todo.done
            })
        },
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