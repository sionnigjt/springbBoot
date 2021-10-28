import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Button, Toast } from 'vant';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(Button).use(Toast).use(ElementPlus).use(store).use(router).mount('#app')
