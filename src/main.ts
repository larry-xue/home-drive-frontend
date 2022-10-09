import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Card from './components/Card/index.vue'

import App from './App';
// import router from './router'

import './assets/main.css';

const app = createApp(App);

// component
// 全局组件注册
app.component('Card', Card);

app.use(createPinia());
// app.use(router)

app.mount('#app');
