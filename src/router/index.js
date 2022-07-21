import { createRouter, createWebHistory } from "vue-router";
import BikeListView from "../views/BikeListView.vue";

const routes = [
  {
    path: "/",
    name: "bike-list",
    component: BikeListView,
  },
  {
    path: "/bikes/detail/:id",
    name: "bike-detail",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "bike-detail" */ "../views/BikeDetailsView.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
