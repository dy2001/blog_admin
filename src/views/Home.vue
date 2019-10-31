<template>
  <div>
    <el-card class="box-card">
         <el-link type="primary" :underline="false" href="https://github.com/dy2001/Blog.Core.WebApi" target="_blank">Blog.Core(Blog WebApi项目)-GitHub</el-link><br/>
         <el-link type="primary" :underline="false" href="https://github.com/dy2001/blog_admin" target="_blank">Blog.Admin(Blog后台项目)-GitHub</el-link><br/>
         <el-link type="primary" :underline="false" href="https://github.com/dy2001/blog_vue" target="_blank">Blog.Vue(Blog主页项目)-GitHub</el-link><br/>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .box-card {
    width: 550px;
    margin: auto;
  }
</style>