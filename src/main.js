import { createWebHistory, createRouter } from "vue-router"
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/global.css"

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Login from "./pages/Login.vue"
import Register from "./pages/Register.vue"


const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/about', name: 'About',component: About },
  { path: '/login', name: 'Login',component: Login },
  { path: '/register', name: 'Register',component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)

app.mount('#app')
