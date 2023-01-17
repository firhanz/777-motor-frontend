import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios '

// createApp(App).mount('#app')

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

const app = createApp(App)
const store = createPinia()

app.use(store).use(router).mount('#app')