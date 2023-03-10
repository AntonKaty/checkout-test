import { RouteRecordRaw } from 'vue-router';
import HomePage from 'src/pages/HomePage/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
