<template>
<div>
  <h3>题目定义模块描述:</h3>
  <p>注意，此模块只进行题目的添加，包括问题的标题，答案，等级，问题主体需要到题目主体内去操作。</p>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="题目名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="题目答案">
    <el-input v-model="form.answer"></el-input>
  </el-form-item>
  <el-form-item label="题目难度">
  <el-select v-model="form.level" placeholder="请选择题目难度">
    <el-option label="1" value="1"></el-option>
    <el-option label="2" value="2"></el-option>
    <el-option label="3" value="3"></el-option>
    <el-option label="4" value="4"></el-option>
    <el-option label="5" value="5"></el-option>
  </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'AddProblem',
  data () {
    return {
      form: {
        name: '',
        answer: '',
        level: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
