<template>
  <div>
    <el-card class="box-card" v-loading="loading">
      <span>标题：</span>
      <el-input v-model="blog.title" placeholder="请输入标题" style="width:450px"></el-input>
      <el-divider></el-divider>
      <span>引言：</span>
      <el-input v-model="blog.abstr" placeholder="请输入引言" style="width:950px"></el-input>
      <el-divider></el-divider>
      <div id="edit"></div>
      <el-divider></el-divider>&nbsp;
      <span>分类：</span>
      <el-select v-model="blog.category" placeholder="请选择">
        <el-option
          v-for="item in categorylist"
          :key="item.id"
          :label="item.categoryName"
          :value="item.id"
        ></el-option>
      </el-select>&nbsp;
      <el-button type="primary" @click="pushblog()">
        <i class="el-icon-check"></i>
        <span>发布</span>
      </el-button>
    </el-card>
    <div v-html="editorContent"></div>
  </div>
</template>

<script>
import wangeditor from "wangeditor";
export default {
  data() {
    return {
      editor: "",
      blog: {
        title: "",
        abstr: "",
        category: ""
      },
      editorContent: "",
      categorylist: "",
      loading: false
    };
  },
  methods: {
    getcategory() {
      this.$api.get("/api/Category/Category", null, data => {
        console.log(data);
        this.categorylist = data.data;
      });
    },
    pushblog() {
      this.loading = true;
      this.$api.post(
        "/api/BlogInfo/Blog",
        {
          Title: this.blog.title,
          Abstr: this.blog.abstr,
          CategoryId: this.blog.category,
          Content: this.editor.txt.html()
        },
        data => {
          this.loading = false;
          this.$message({
            message: data.result,
            type: "success"
          });
        }
      );
      this.loading = false;
    }
  },
  mounted() {
    this.editor = new wangeditor("#edit");
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      Console.log(this.editorContent);
    };
    this.editor.create();
    this.editor.txt.html("<p>Blog</p>");
    this.getcategory();
  }
};
</script>

<style scoped>
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}

/* ul ol 样式 */
ul,
ol {
  margin: 10px 0 10px 20px;
}
</style>