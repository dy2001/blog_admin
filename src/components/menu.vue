<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <center>
        <h2>Blog后台</h2>
        <div class="block">
          <el-image
            src="https://www.thiswaifudoesnotexist.net/example-10001.jpg"
            style="width:170px;border-radius: 90px;"
          ></el-image>
        </div>
      </center>
      <el-menu-item index="Home" @click="$router.push({name:'Home'})">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="Category" @click="$router.push({name:'Category'})">
        <i class="el-icon-menu"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <el-menu-item index="Blog" @click="$router.push({name:'Blog'})">
        <i class="el-icon-document"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="Diary" @click="$router.push({name:'Diary'})">
        <i class="el-icon-edit"></i>
        <span slot="title">日记管理</span>
      </el-menu-item>
      <el-menu-item index="User" @click="$router.push({name:'User'})">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
      <el-menu-item index="1" @click="logout()">
        <i class="el-icon-switch-button"></i>
        <span slot="title">退出</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      if (window.localStorage.getItem("my_token") &&window.localStorage.getItem("my_token").length >= 128) {
        this.$confirm("确定退出吗, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            window.localStorage.setItem("my_token", "");
            this.$router.push({
              name: "/Login"
            });
          })
          .catch(() => {});
      }
      else{
        this.$alert('未登录', '未登录', {
          confirmButtonText: '确定'
        });
      }
    }
  }
};
</script>

<style>
</style>
 