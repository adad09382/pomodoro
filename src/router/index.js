// Composables
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/views/ViewHome.vue"),
    meta: {
      title: "國立科技高中-社團介紹網",
    },
  },
  {
    path: "/guitar",
    component: () => import("@/views/ViewGuitar.vue"),
    meta: {
      title: "吉他社",
    },
    afterEnter() {},
  },
  // 下面這寫法會在進入頁面直接加載，就吃資源
  // {
  //   path: "/guitar",
  //   component: ViewGuitar,
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

//所有路由進入後，進行的操作，to是目標網頁，from是來源網站
router.afterEach((to, from) => {
  document.title = to.meta.title;
});

export default router;
