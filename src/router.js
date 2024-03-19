import { createWebHistory, createRouter } from "vue-router";
import Login from './components/SignUp.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 