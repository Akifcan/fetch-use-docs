import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppCode from './components/AppCode.vue'

const app = createApp(App)

app.use(createPinia())
app.component('AppCode', AppCode)
app.use(router)

app.mount('#app')
