<template>
  <div @click.stop="sendTreeName(item)" v-for="(item, index) in data" :key="index">
    <h1>{{item.name}}</h1>
    <Suspense>
      <template #default>
        <A />
      </template>
      <template #fallback>
        <div>老子在加载中！！！！！！！！！！！</div>
      </template>
    </Suspense>
    <TreeComp @sendName="sendTreeName" v-if="item?.children?.length" :data="item.children"></TreeComp>
    <div v-if="!item?.children?.length">
      <h1 v-for="tab in tabs" :key="tab.name" @click.stop="switchTab(tab.comName)">
        {{tab.name}}
      </h1>
      <component :is="current.comName"></component>
      <Card>
        <template #[dynamicSLot]>
          <div @click="changeSlot">动态插槽</div>
        </template>
        <!-- <template #header1>
          <div>common</div>
        </template>
        <template v-slot:header2="{datas}">
          <div>i am header2</div>
          <div>
            datas:
            <span>{{datas}}</span>
          </div>
        </template>
        <template v-slot="{content}">
          <p>This way, plz {{content}}</p>
        </template> -->
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, reactive, markRaw, ref, defineAsyncComponent } from 'vue'
import B from '../B.vue'
import C from '../C.vue'
// import TreeComp from './Tree.vue'
export type TreeList = {
  name: string;
  children?: TreeList[] | []
}
const A = defineAsyncComponent(() => import('../A.vue'))


type Tab = {
  name: string;
  comName: any;
}

type comName = Pick<Tab, 'comName'>

const tabs = reactive<Tab[]>([
{
    name: 'B',
    comName: markRaw(B)
  }, {
    name: 'C',
    comName: markRaw(C)
  }
])

const current = reactive<comName>({
  comName: tabs[0].comName
})

const { data } = defineProps<{
  data?: TreeList[]
}>()

const emits = defineEmits(['sendName'])

/**
 * 切换tab
 * @param comName 
 */
const switchTab = (comName: any) => {
  current.comName = comName;
}

/**
 * 向父组件传递事件
 * @param item 
 */
const sendTreeName = (item: TreeList) => {
  emits('sendName', item)
}


/**
 * 动态插槽
 */
const dynamicSLot = ref<string>('header1')
const changeSlot = () => {
  const newxSlot = ['header1', 'header2', 'content'][Math.floor(Math.random() * 3)] ?? 'header1'
}
</script>

<script lang="ts">
export default {
  name: 'TreeComp'
}
</script>

<style scoped lang="less">
div {
  margin: 10px;
}
</style>