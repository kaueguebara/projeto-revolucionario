const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    redirect: "/home",
    children: [
      { path: "home", component: () => import("pages/Home.vue") },
      { path: "products", component: () => import("pages/Produtos.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
