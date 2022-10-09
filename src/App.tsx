import {
  defineComponent,
  ref,
  reactive,
  shallowRef,
  triggerRef,
  customRef,
  readonly,
  toRef,
  toRaw,
} from 'vue';
import Cart from './components/Cart';
import Watch from './components/Watch';
import Layout from './views/layout';

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class='mx-h-screen max-w-full'>
          {/* <Cart></Cart>
          <Watch></Watch> */}
          <Layout></Layout>
        </div>
      );
    };
  },
});
