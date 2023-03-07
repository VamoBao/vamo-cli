import { createApp } from 'vue'
import './style.less'
import './assets/style/index.less'
import './assets/style/utils.less'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
