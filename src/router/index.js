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
  {
    path: '/D7',
    name: 'Functional 2',
    component: () => import('../views/D7/Functional2.vue'),
  },
  {
    path: '/D8',
    name: 'Canvas',
    component: () => import('../views/D8/Canvas.vue'),
  },
  {
    path: '/D10',
    name: 'MultiCheckbox',
    component: () => import('../views/D10/MultiCheckbox.vue'),
  },
  {
    path: '/D12',
    name: 'Konami Code',
    component: () => import('../views/D12/KonamiCode.vue'),
  },
  {
    path: '/D15',
    name: 'Local Storage',
    component: () => import('../views/D15/LocalStorage.vue'),
  },
  {
    path: '/D17',
    name: 'Sort',
    component: () => import('../views/D17/Sort.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
