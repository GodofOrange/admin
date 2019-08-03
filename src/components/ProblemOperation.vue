<template>
<el-row class="tac">
<el-col :span="3">
<el-menu
  @select="handleSelect"
  default-active="2"
  class="el-menu-vertical-demo"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
<el-menu-item index="1">
  <i class="el-icon-menu"></i>
  <span slot="title">题目定义</span>
</el-menu-item>
<el-menu-item index="2">
  <i class="el-icon-menu"></i>
  <span slot="title">类别添加</span>
</el-menu-item>
<el-menu-item index="3">
  <i class="el-icon-menu"></i>
  <span slot="title">添加题目主体</span>
</el-menu-item>
<el-menu-item index="4">
  <i class="el-icon-menu"></i>
  <span slot="title">题目删除</span>
</el-menu-item>
<el-menu-item index="5">
  <i class="el-icon-menu"></i>
  <span slot="title">题目修改</span>
</el-menu-item>
<el-menu-item index="6">
  <i class="el-icon-menu"></i>
  <span slot="title">题目浏览</span>
</el-menu-item>

</el-menu>
</el-col>
<el-col :span="16">
<transition name="el-fade-in-linear">
<router-view/>
</transition>
</el-col>
<el-col :span="5">
  <h4>温馨提示:</h4>
  <p>因为这个项目做的很仓促，希望大家能够帮我寻bug提建议</p>
</el-col>
</el-row>
</template>

<script>
export default {
  name: 'ProblemOperation',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      if (key === '1') {
        this.$router.replace({
          path: '/PO/ADP'
        })
      } else if (key === '2') {
        this.$router.replace({
          path: '/PO/AC'
        })
      } else if (key === '3') {
        this.$router.replace({
          path: '/PO/PBI'
        })
      } else if (key === '4') {
        this.$router.replace({
          path: '/PO/DP'
        })
      } else if (key === '5') {
        this.$router.replace({
          path: '/PO/PU'
        })
      } else if (key === '6') {
        this.$router.replace({
          path: '/PO/PI'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
