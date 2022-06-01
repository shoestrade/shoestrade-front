import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/MemberView.vue"),
    redirect: "/user",
    children: [
      {
        path: "signup",
        name: "signUp",
        component: () => import("@/components/user/SignUp.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
