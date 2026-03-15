<template>
  <div ref="container" class="macro-wrapper">
    <div v-if="loading">应用加载中...</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { MicroLoader } from '../services/MacroServiceLoader';

const props = defineProps({
  module: String,
  src: String,
});

const container = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const { mount } = await MicroLoader.load(props.src);
    loading.value = false;

    // 调用子应用暴露的 mount 方法
    mount(container.value);
  } catch (err) {
    console.error('加载微应用失败:', err);
  }
});

onUnmounted(() => window[props.module]?.unmount?.());
</script>
