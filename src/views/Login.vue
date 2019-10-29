<template>
  <div>
    <div class="login_form">
      <el-card class="box-card">
        <div class="img_Head">
          <el-image
            src="https://www.thiswaifudoesnotexist.net/example-10001.jpg"
            style="border-radius: 90px;"
          ></el-image>
        </div>

        <el-form :label-position="labelPosition" label-width="80px">
          <el-form-item label="账号：">
            <el-input v-model="user.account"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="login_btn" @click="login">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      user: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$api.get(
        "/api/User/Login",
        { Account: this.user.account, Password: this.user.password },
        data => {
          window.localStorage.setItem("my_token", data.data);
          this.$router.push({
            name: "/Home"
          });
        }
      );
    }
  }
};
</script>


<style scoped>
.login_form {
  width: 550px;
  margin: auto;
}
.login_btn {
  position: relative;
  left: 45%;
}
.img_Head {
  width: 170px;
  border-radius: 90px;
  margin: auto;
  padding-bottom: 30px;
}
</style>