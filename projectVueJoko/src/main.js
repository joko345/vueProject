import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/appHeader.vue'//membuat header bisa diakses secara global
import Footer from './components/generals/appFooter.vue'

const app = createApp(App)

app.component('app-footer', Footer)
app.component('app-header', Header)
app.mount('#app')