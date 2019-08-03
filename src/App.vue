<template>
<div id="app">
<el-menu :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b">
<el-menu-item index="1">用户管理</el-menu-item>
<el-submenu index="2">
<template slot="title">题库管理</template>
<el-menu-item index="2-1">题目操作</el-menu-item>
<el-menu-item index="2-2">分类管理</el-menu-item>
<el-menu-item index="2-3">作业管理</el-menu-item>
</el-submenu>
<el-menu-item index="3">系统设置</el-menu-item>
</el-menu>
<transition name="el-fade-in-linear">
<router-view/>
</transition>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  name: 'myNav',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      if (key === '2-1') {
        this.$router.replace({
          path: '/PO'
        })
      } else if (key === '1') {
        this.$router.replace({
          path: '/'
        })
      } else if (key === '2-2') {
        this.$router.replace({
          path: '/CF'
        })
      } else if (key === '2-3') {
        this.$router.replace({
          path: '/HM'
        })
      }
    }
  }
}
</script>
<style>
  #app{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  body {
    background-color: darkgray;
    margin: 0px;
    padding: 0px;
  }
</style>
