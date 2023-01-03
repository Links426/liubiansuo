const routes = [
  {
    path: "/",
    component: () => import("@/view/index/index.vue"),
    children: [],
  },
];
export default routes;
