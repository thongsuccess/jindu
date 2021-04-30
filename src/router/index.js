import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //路径
    name: "h5",
    component: () => import("@/views/h5/index.vue") // 匹配的组件
    // component: Home // 匹配的组件
  },
  // {
  // path: "/1", //路径
  // redirect: "/login"
  // component: () => import("@/views/home/index.vue") // 匹配的组件
  // component: Home // 匹配的组件
  // },
  {
    path: "/login",
    name: "login",
    title: "登陆",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/loan-home",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/loan-home",
        name: "loan-home",
        title: "首页",
        component: () => import("@/views/loan-home/home.vue")
      },
      {
        path: "/loan-input",
        name: "loan-input",
        title: "贷款审核",
        component: () => import("@/views/loan-home/loan-input/index.vue")
      },
      {
        path: "/loan-approve",
        name: "loan-approve",
        title: "贷款审批",
        component: () => import("@/views/loan-home/loan-approve/index.vue"),
        children: [
          {
            path: "first",
            name: "first",
            title: "初审"
            // component: () => import("@/views/loan-home/first.vue")
          },
          {
            path: "end",
            name: "end",
            title: "中审"
            // component: () => import("@/views/loan-home/end.vue")
          }
        ]
      },
      {
        path: "/about2",
        name: "about2",
        component: () => import("@/views/loan-home/about2.vue")
      },
      {
        path: "/about3",
        name: "about3",
        component: () => import("@/views/loan-home/about3.vue")
      },
      {
        path: "/permission",
        name: "permission",
        component: () => import("@/views/loan-home/permission/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "selected" //默认样式可以任意修改
});

export default router;
