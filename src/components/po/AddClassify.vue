<template>
  <div>
    <h3>所有分类如下所示</h3>
    <template>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
    <el-table-column
      label="难度等级"
      prop="date">
    </el-table-column>
    <el-table-column
      label="分类标题"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
    <template slot="header" slot-scope="scope">
    <el-input
      v-model="search"
      size="mini"
      placeholder="输入关键字搜索"/>
    </template>
    <template slot-scope="scope">
    <el-button
      size="mini"
      @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
    <el-button
      size="mini"
      type="danger"
      @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
    </template>
    </el-table-column>
    </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AddClassify',
  data () {
    return {
      tableData: [{
        date: '3',
        name: '考研'
      }, {
        date: '4',
        name: '建模'
      }, {
        date: '1',
        name: '初级'
      }, {
        date: '5',
        name: '竞赛'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$alert('题目如下所示。。。', '包含的题目如下所示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    handleDelete (index, row) {
      this.$alert('确定要删除吗', '删除操作', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `已经删除了`
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
