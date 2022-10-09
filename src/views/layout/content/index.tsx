import { defineComponent, ref, reactive } from 'vue';
import Card from '../../../components/Card/index.vue';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div class='p-4 max-w-full max-h-screen'>
          <h1>This is content</h1>
          <div>
            {new Array(100).fill(1).map((item, index) => {
              return (
                <Card key={index} content={new Date().toString()}>
                </Card>
              );
            })}
          </div>
        </div>
      );
    };
  },
});
