<template>
  <div>
    <el-button type="primary" @click="addCategory">
      <i class="el-icon-plus"></i>
      <span>添加分类</span>
    </el-button>
    <br />
    <br />
    <el-table :data="tableData" border style="width: 820px">
      <el-table-column prop="id" label="ID" width="120"></el-table-column>
      <el-table-column prop="categoryName" label="分类名称" width="150"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="230"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button  @click="updateCategory(scope.row)">修改</el-button>
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
    getCategoryList() {
      this.$api.get("/api/Category/Category", null, data => {
        this.tableData = data.data;
      });
    },
    addCategory() {
      this.$prompt("请输入分类名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$api.post("/api/Category/Category", { name: value }, data => {
            this.$message({
              type: "success",
              message: value + data.result
            });
            this.getCategoryList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    updateCategory(row) {
        let rowid = row.id;
      this.$prompt("请输入新的分类名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$api.put("/api/Category/Category", {id:rowid,name:value }, data => {
            this.$message({
              type: "success",
              message: value + data.result
            });
            this.getCategoryList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    deleteCategory(row) {
      let rowid = row.id;
      this.$confirm("此操作将永久此分类, 是否继续?(该分类下的所有Blog也会删除！！！)", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.delete("/api/Category/Category", { id: rowid }, data => {
            this.$message({
              type: "success",
              message: data.result
            });
          });
          this.getCategoryList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.getCategoryList();
  }
};
</script>

<style>
</style>