import { createWebHashHistory, createRouter } from "vue-router"
import { createApp } from "vue"
import App from "./App.vue"

import Contact from "./pages/Contact.vue"
import About from "./pages/About.vue"


const routes = [
  { path: '/', name: 'Contact',component: Contact },
  { path: '/about', name: 'About',component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)

app.mount('#app')
