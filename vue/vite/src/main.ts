import { createApp } from 'vue'
import App from './App.vue'
import { DatePicker } from "ant-design-vue";
import router from './router/index'
createApp(App).use(DatePicker).use(router).mount('#app')
