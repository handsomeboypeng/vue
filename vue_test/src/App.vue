<template>
    <div>
        <div class="row">
            <Banner></Banner>
        </div>
        <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
            <!-- 原始html中我们使用a标签实现页面的跳转 -->
            <!-- <a class="list-group-item active" href="./about.html">About</a> -->
            <!-- <a class="list-group-item" href="./home.html">Home</a> -->
            <!-- 要想实现点击导航区切换路径就不能用a标签了，得用vue-router库提供的一个特殊标签router-link,利用这个标签实现路由的切换 -->
            <!-- a标签用href提供跳转router-link使用to -->
            <!-- active-class激活时候的样式 -->
            <!-- 1、路由：同样的位置，组件可”动态化“，可不断改变（核心：实现动态特性）  
                2、插槽：同样的组件，组件结构一样，组件中指定内容可”选择化“（核心：复用了组件的结构） -->
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
            <div class="panel-body">
                <!-- 指定组件的呈现位置 -->
                <router-view></router-view>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
    name:'App',
    components:{Banner}
}
</script>

<style>

</style>