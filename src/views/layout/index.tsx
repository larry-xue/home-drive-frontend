import { defineComponent, ref, reactive } from 'vue';
import Header from './header';
import Content from './content';
import Menu from './menu';

export default defineComponent({
  setup() {
    return () => {
        return (
          <div class='flex'>
            <Menu title='asd' class='flex-initial'></Menu>
            <div class='flex-auto'>
              <Header></Header>
              <Content></Content>
            </div>
          </div>
        );
    }
  },
});
