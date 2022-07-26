<template>
       <div class="todo-footer" v-show="total">
                <label>
                <!-- <input type="checkbox" :checked="isAll"/> -->
                <!-- 把isall写在v-model中以后你全选或者部分选都会引起isall变化 -->
                <!-- checkbox是一个输入类型的节点，输入类型的节点如果既要初始化的结果要展示以后要有交互就可以用v-model做成一个 -->
                <!-- v-model=的值就是checked -->
                <input type="checkbox" v-model="isAll"/>
                </label>
                <span>
                <span>已完成{{this.doneTotal}}</span> / 全部{{total}}
                </span>
                <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
        </div>
</template>

<script>
export default {
    name:'MyFooter',
    props: ['todos'],
    computed: {
        total(){
            return this.todos.length
        },
        doneTotal(){
            return this.todos.reduce((pre,current)=>{
                return pre+(current.done?1:0)
            },0)
        },
        //一个计算属性可以通过另外两个或者多个来进行计算
        isAll:{
            //计算属性的完整写法,如果只被读取不被修改可以简写只写一个return,但是如果又要
            //被读取又要被修改就不能够简写了，得写成完整的含有getter和setter，但是只要发生变化v-model就会感应到所以就会拿到get中的值
            get(){
                return this.total ===  this.doneTotal && this.total>0 
            },
            set(value){
                this.$emit('checkAllTodo',value)
            }   
        }
    },
    methods: {
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked);
        // }
        clearAll(){
            this.$emit('clearAllTodo')
        }
    },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>