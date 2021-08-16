import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/D1',
    name: 'Drum Kit',
    component: () => import ( '../views/D1/DrumKit.vue' )
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
