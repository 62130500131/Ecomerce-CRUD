import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NavBar from './components/NavBar.vue'
import BaseCard from './components/BaseCard.vue'
import GridItem from './components/GridItem.vue'

const app = createApp(App)

app.component('NavBar',NavBar)
app.component('BaseCard',BaseCard)
app.component('GridItem',GridItem)
app.use(router)
app.mount('#app')

