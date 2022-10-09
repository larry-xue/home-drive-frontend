<template>
  <div class="card">
    <header class="card-header">
      <h1>
        <slot name="header1">
          header 1a
        </slot>
      </h1>
      <h2>
        <slot name="header2" :datas="datas">
          header 2a
        </slot>
      </h2>
    </header>
    <article class="card-content">
      {{props.content}}
      <div v-for="data in datas">
        <slot :content="data">content</slot>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, reactive, ref } from 'vue'
// import type Props from './def'

type Props = {
  content?: string;
}

const props = withDefaults(defineProps<Props>(), {
  content: 'I am content'
})

const datas = reactive<string[]>([
  'data1', 'data2', 'data3', 'data4'
])


</script>

<style scoped lang="less">
@border: #ccc;

.card {
  padding: 20px;
  border: 3px solid @border;
  margin-top: 10px;

  :hover {
    background-color: @border;
    transition: all 1s;
  }

  &-header {
    display: flex;
    border: 2px solid @border;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  &-content {
    padding: 10px;
    border: 2px solid @border;
    color: #a2b;
  }
}
</style>