import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { BootstrapVueNext } from 'bootstrap-vue-next'

import './assets/main.css'

const app = createApp(App)

app.use(BootstrapVueNext)
app.use(createPinia())
app.use(router)

app.mount('#app')



