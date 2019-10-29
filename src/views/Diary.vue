<template>
  <div>
    <el-button type="primary" @click="addDiary()">
      <i class="el-icon-plus"></i>
      <span>写日记</span>
    </el-button>
    <br />
    <br />
    <el-table :data="tableData" border style="width: 920px">
      <el-table-column prop="id" label="ID" width="120"></el-table-column>
      <el-table-column prop="createTime" label="发布时间" width="230"></el-table-column>
      <el-table-column prop="content" label="内容" width="320"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="updateDiary(scope.row)">修改</el-button>
          <el-button type="danger" @click="deleteDiary(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Diary",
  data() {
    return {
      tableData: [],
      centerDialogVisible: false,
      textarea: ""
    };
  },
  methods: {
    getDiary() {
      this.$api.get("/api/Diary/Diary", null, data => {
        this.tableData = data.data;
      });
    },
    addDiary() {
      this.$prompt("请输入内容", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$api.post("/api/Diary/Diary", { content: value }, data => {
            this.$message({
              type: "success",
              message: data.result
            });
            this.getDiary();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    updateDiary(row) {
      let rowid = row.id;
      this.$prompt("请输入新内容", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$api.put(
            "/api/Diary/Diary",
            { id: row.id, content: value },
            data => {
              this.$message({
                type: "success",
                message: data.result
              });
              this.getDiary();
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    deleteDiary(row) {
      let rowid = row.id;
      this.$confirm("此操作将永久此日记, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.delete("/api/Diary/Diary", { id: rowid }, data => {
            this.$message({
              type: "success",
              message: data.result
            });
            this.getDiary();
          });
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
    this.getDiary();
  }
};
</script>

<style>
</style>