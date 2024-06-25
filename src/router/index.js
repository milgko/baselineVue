import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../views/ProductPage.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  { path: '/', component: ProductPage },
  { path: '/cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
