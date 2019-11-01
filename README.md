# blog_admin
这是一个前后端分离的个人博客系统，基于.Net Core 3.0+Vuejs打造。

[Blog.Core项目地址](https://github.com/dy2001/Blog.Core.WebApi)   	Blog WebApi项目（基于.NetCore 3.0开发）
[Blog.Admin项目地址](https://github.com/dy2001/blog_admin) 	Blog后台管理项目（基于VueJS开发）
[Blog.Vue项目地址](https://github.com/dy2001/blog_vue)		Blog前台项目（基于VueJS开发）
此系列项目代码、分层非常简单(代码逻辑一目了然)，很适合.Net Core初学者学习

## 如果你喜欢这个项目或者它帮助你, 请给一个 Star⭐
### 开发环境
- Node.js(同时安装 npm 前端包管理工具)
- VS Code 或者其他前端开发工具
### 使用技术
- VueJs
- VueCli
- Vue-Router
- Axios
- ElementUI
### 如何调试这个项目
- 将这个项目Clone到本地
- 进入项目目录
- 打开控制台输入`npm install`
- 修改src/api/http.js文件第一行的`var root = 'http://localhost:52229'`的内容改为Blog.Core项目的地址。
- 控制台输入`npm run serve`
- 根据控制台提示在浏览器打开相应地址即可

### 发布

控制台输入`npm run build`然后将生成的dist文件夹的内容拷贝到服务器即可

###### (我的Vue真的菜！)