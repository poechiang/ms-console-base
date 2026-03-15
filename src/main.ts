import type { CfExposes } from '@shared/types';
import { createApp } from 'vue';
import App from './App.tsx';
import router from './routes';
import './style.less';

window.__FRAME_IN_MFE__ = true;
const { header, aside } = (await import(/* @vite-ignore */ 'http://localhost:5174/src/main.ts')) as CfExposes;

header.store.title = 'Console X';
aside.store.menuItems = router
  .getRoutes()
  .filter(r => !!r.meta?.menuLabel)
  .map(r => {
    return {
      key: r.name as string,
      label: (r.meta.menuLabel ?? r.name) as string,
      path: r.path,
      onClick: () => router.push(r),
    };
  });

const baseApp = createApp(App);
baseApp.provide('frameHeader', header);
baseApp.provide('frameAside', aside);
baseApp.use(router).mount('#app');
