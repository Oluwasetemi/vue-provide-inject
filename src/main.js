import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp, reactive } from 'vue'
import { createGlobalState, useStorage } from '@vueuse/core'

export const useState = createGlobalState(() =>
  useStorage('vue-use-locale-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium'
  })
)

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
