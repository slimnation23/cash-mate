import { createApp } from 'vue'
import '../styles/style.css'
import App from './App.vue'

// components
import SpreadSheets from "./components/SpreadSheets.vue"
import December2024 from "./components/December2024.vue"

createApp(App)
.component("spread-sheets", SpreadSheets)
.component("december-2024", December2024)
.mount('#app')
