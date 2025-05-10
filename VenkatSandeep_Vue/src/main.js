import { createApp } from 'vue'
import App from './App.vue'

window.process = { env: {} }

createApp(App).mount('#app')
