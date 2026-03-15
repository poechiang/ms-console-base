import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 混合引入 .vue 和 .tsx 组件
import About from './components/About.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/overview',
    name: 'Overview',
    component: HelloWorld,
    meta: {
      menuLabel: '总览',
    },
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('./modules/Chart'),
  },
  {
    path: '/oa',
    name: 'Oa',
    component: () => import('./modules/OA'),
  },
  {
    path: '/about',
    name: 'Abuout',
    component: About,
    meta: {
      menuLabel: '关于',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(to => {
  document.title = `${to.meta.title ?? to.meta.menuLabel ?? 'NotFound'} - 我的应用`;
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    return '/sign-in';
  } else {
    return true;
  }
});

export default router;
