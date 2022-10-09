import { defineComponent, ref, reactive, watch, watchEffect } from 'vue';

export default defineComponent({
  setup() {
    const refVar = ref({ ref: 'this is ref' });
    const reactiveObj = reactive({ reactive: 'this is reactive' });
    let obj = { name: 'azoux' };

    watchEffect((invalidate) => {
      console.log('refVar', refVar.value);
      invalidate(() => {
        console.log('before');
      });
    });

    setTimeout(() => {
      refVar.value = { ref: 'asd' };
    }, 1000);

    return () => {
      return <>?</>;
    };
  },
});
