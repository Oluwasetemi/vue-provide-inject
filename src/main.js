import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp, reactive } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const store = reactive({
  count: 0,
  increment() {
    store.count++
  },
  decrement() {
    store.count--
  },
})

app.provide('Gstore', store)

app.mount('#app')
