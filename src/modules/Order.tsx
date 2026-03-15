import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderView',
  setup() {
    return () => (
      <div class="order">
        <h1>这是一个 TSX 编写的页面</h1>
      </div>
    );
  },
});
