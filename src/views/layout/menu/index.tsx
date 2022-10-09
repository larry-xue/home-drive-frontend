import { defineComponent, ref, reactive, defineProps } from 'vue';
import Tree from '../../../components/Tree/Tree.vue';
// import A from '../../../components/A.vue';
// import B from '../../../components/B.vue';
// import C from '../../../components/C.vue';

export default defineComponent<{
  title: string;
}>({
  setup(props) {
    type TreeList = {
      name: string;
      children?: TreeList[];
    };
    const data = reactive<TreeList[]>([
      {
        name: '1',
        children: [
          {
            name: '1-1',
            children: [
              {
                name: '1-1-1',
                children: [],
              },
            ],
          },
          {
            name: '1-2',
            children: [],
          },
        ],
      },
      {
        name: '2',
        children: [
          {
            name: '2-1',
            children: [],
          },
          {
            name: '2-2',
            children: [],
          },
          {
            name: '2-3',
            children: [],
          },
        ],
      },
      {
        name: '3',
        children: [
          {
            name: '3-1',
            children: [],
          },
        ],
      },
      {
        name: '4',
        children: [],
      },
    ]);

    interface Tab {
      name: string;
      comName: any;
    }

    return () => {
      return (
        <>
          {/* <div class='p-4'>This is menu</div>
          <h2>{props.title}</h2>
          <hr /> */}
          <Tree
            onSendName={(item: TreeList) => console.log(item)}
            data={data}></Tree>
        </>
      );
    };
  },
});
