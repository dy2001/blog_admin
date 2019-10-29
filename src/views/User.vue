<template>
  <div>
    <div style="width:650px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人信息</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="dialogFormVisible=true"
          >修改信息</el-button>
        </div>
        <div>账号：{{user.account}}</div>
        <el-divider></el-divider>
        <div>昵称：{{user.nickName}}</div>
        <el-divider></el-divider>
        <div>邮箱：{{user.email}}</div>
      </el-card>
    </div>

    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="user">
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="user.nickName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="user.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updataUser()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: [],
      formLabelWidth: "120px",
      dialogFormVisible: false
    };
  },
  methods: {
    getUserInfo() {
      this.$api.get("/api/User/Admin", null, data => {
        this.user = data.data;
      });
    },
    updataUser() {
      this.$api.put(
        "/api/User/Admin",
        {
          Password: this.user.password,
          NickName: this.user.nickName,
          Email: this.user.email
        },
        data => {
          this.$message({
            message: data.result,
            type: "success"
          });
          this.dialogFormVisible = false;
          this.getUserInfo();
        }
      );
      this.dialogFormVisible = false;
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style>
</style>