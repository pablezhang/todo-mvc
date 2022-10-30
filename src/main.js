import { createApp } from 'vue';
import './index.css';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
