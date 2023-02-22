import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HomeVue, LoginVue } from '@/views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => HomeVue,
  },
  {
    path: '/login',
    component: () => LoginVue,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
