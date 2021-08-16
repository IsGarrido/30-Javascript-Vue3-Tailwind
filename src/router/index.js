import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/D1',
    name: 'Drum Kit',
    component: () => import('../views/D1/DrumKit.vue'),
  },
  {
    path: '/D2',
    name: 'Clock',
    component: () => import('../views/D2/Clock.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
