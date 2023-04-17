import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CropIndex from '../views/crops/CropIndex.vue'
import AddCrop from '../views/crops/AddCrop.vue'
import EditCrop from '../views/crops/EditCrop.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import LoginUser from '../views/user/LoginUser.vue'
import RegisterUser from '../views/user/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/crops',
      name: 'crops',
      component: CropIndex
    },
    {
      path: '/addCrop',
      name: 'addCrop',
      component: AddCrop
    },
    {
      path: '/crop/:id/edit',
      name: 'editCrop',
      component: EditCrop
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '/loginUser',
      name: 'loginUser',
      component: LoginUser
    },
    {
      path: '/registerUser',
      name: 'registerUser',
      component: RegisterUser
    },
  ]
})

export default router
