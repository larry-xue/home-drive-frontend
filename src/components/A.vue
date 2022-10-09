<template>
  <div>我是异步组件</div>
  <div>
    <ul>
      <li v-for="todo in api.todos" :key="todo.title + todo.userId">
        <div>
          <p>{{todo.title}}</p>
          <p>{{todo.userId}}</p>
          <p>{{todo.completed}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface TodoProp {
  userId: number;
  title: string;
  completed: boolean;
}

const api = reactive<{
  todos: TodoProp[]
}>({
  todos: []
})
const serverData = await fetch('https://jsonplaceholder.typicode.com/todos')
serverData.json().then((value: TodoProp[]) => {
  setTimeout(() => {
    api.todos = value;
  }, 2000)
})
</script>

<style scoped lang="less">

</style>