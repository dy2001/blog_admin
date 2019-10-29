<template>
  <div>
    <el-button type="primary" @click="addBlog">
      <i class="el-icon-plus"></i>
      <span>写Blog</span>
    </el-button>
    <br />
    <br />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="90"></el-table-column>
      <el-table-column prop="title" label="标题" width="250"></el-table-column>
      <el-table-column prop="category" label="分类" width="130"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="230"></el-table-column>
      <el-table-column prop="abstr" label="引言" width="650"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="updateCategory(scope.row)">修改</el-button>
          <el-button type="danger" @click="deleteCategory(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getBlogList() {
      this.$api.get("/api/BlogInfo/GetBlog", { page: 1, size: 9999 }, data => {
        console.log(data.data);
        this.tableData = data.data;
      });
    },
    addBlog() {
      this.$router.push({
        name: "EditBlog"
      });
    },
    updateCategory(row) {
      let rowid = row.id;
      this.$router.push({
        name: "UpdateBlog",
        query: {
          blogid: rowid
        }
      });
    },
    deleteCategory(row) {
      let rowid = row.id;
      this.$confirm("此操作将永久删除该Blog, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.delete("/api/BlogInfo/Blog", { id: rowid }, data => {
            this.$message({
              type: "success",
              message: data.result
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
        this.getBlogList();
    }
  },
  mounted() {
    this.getBlogList();
  }
};
</script>

<style>
</style>
this.$api.delete("/api/BlogInfo/Blog", { id: rowid }, data => {
        this.$message({
          type: "success",
          message: data.result
        });
)}