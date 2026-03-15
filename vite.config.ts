import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    cors: true, // 必须开启，基座才能 fetch 资源
    port: 5173, // 假设 Vue 5173, Angular 4200
  },
  build: {
    manifest: true, // 生产环境必须开启，用于基座解析文件名
  },
  define: {
    __FRAME_IN_MEF__: true,
    __MODULE_IN_MEF__: true,
  },
});
