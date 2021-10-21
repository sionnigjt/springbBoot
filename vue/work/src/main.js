import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Button, Toast } from 'vant';


createApp(App).use(Button).use(Toast).use(store).use(router).mount('#app')
