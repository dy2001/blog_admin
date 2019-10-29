import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Category = ()=> import('../views/Category.vue');//异步加载
const Diary = ()=> import('../views/Diary.vue');
const User = ()=> import('../views/User.vue');
const Blog = ()=> import('../views/Blog/Blog.vue');
const EditBlog = ()=> import('../views/Blog/EditBlog.vue');
const UpdateBlog = ()=> import('../views/Blog/UpdateBlog.vue');
const Login = ()=> import('../views/Login.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Blog首页',
      requireAuth: true 
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      title:'Blog首页',
      requireAuth: true 
    }
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog,
    meta:{
      title:'Blog管理',
      requireAuth: true 
    }
  },
  {
    path: '/Blog/EditBlog',
    name: 'EditBlog',
    component: EditBlog,
    meta:{
      title:'写Blog',
      requireAuth: true 
    }
  },
  {
    path: '/Blog/UpdateBlog',
    name: 'UpdateBlog',
    component: UpdateBlog,
    meta:{
      title:'修改Blog',
      requireAuth: true 
    }
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category,
    meta:{
      title:'分类管理',
      requireAuth: true 
    }
  },
  {
    path: '/Diary',
    name: 'Diary',
    component: Diary,
    meta:{
      title:'日记管理',
      requireAuth: true 
    }
  },
  {
    path: '/User',
    name: 'User',
    component: User,
    meta:{
      title:'个人信息',
      requireAuth: true 
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      title:'登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (window.localStorage.getItem("my_token")&&window.localStorage.getItem("my_token").length>=128) {  // 通过vuex state获取当前的token是否存在
          next();
      }
      else {
          next({
              path: '/Login'
          })
      }
  }
  else {
      next();
  }
})
export default router
