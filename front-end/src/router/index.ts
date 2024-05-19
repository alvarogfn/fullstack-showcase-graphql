import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";
import ShowcaseView from "@/views/showcase-view.vue";
import ShowcaseFormView from "@/views/showcase-form-view.vue";
import ProductView from "@/views/product-view.vue";
import ProductFormView from "@/views/product-form-view.vue";
import ProductEditView from "@/views/product-edit-view.vue";
import ShowcaseEditView from "@/views/showcase-edit-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "home",
    },
    {
      path: "/showcase/:id",
      component: ShowcaseView,
      name: "showcase",
    },
    {
      path: "/showcase/create",
      name: "showcase-form",
      component: ShowcaseFormView,
    },
    {
      path: "/showcase/:id/edit",
      name: "showcase-edit",
      component: ShowcaseEditView,
    },
    {
      path: "/product/:id",
      component: ProductView,
      name: "product",
    },
    {
      path: "/product/:id/edit",
      name: "product-edit",
      component: ProductEditView,
    },
    {
      path: "/product/create",
      name: "product-form",
      component: ProductFormView,
    },
  ],
});

export default router;
