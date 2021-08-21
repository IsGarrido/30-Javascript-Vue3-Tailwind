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
  {
    path: '/D3',
    name: 'Css Controls',
    component: () => import('../views/D3/CssControls.vue'),
  },
  {
    path: '/D4',
    name: 'Function',
    component: () => import('../views/D4/Functional.vue'),
  },
  {
    path: '/D5',
    name: 'Gallery',
    component: () => import('../views/D5/Gallery.vue'),
  },
  {
    path: '/D6',
    name: 'Type Ahead',
    component: () => import('../views/D6/TypeAhead.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
