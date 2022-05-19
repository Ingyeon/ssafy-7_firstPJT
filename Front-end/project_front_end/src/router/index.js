import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'

import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'

import CommunityView from '@/views/CommunityView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import MovieGenreView from '@/views/MovieGenreView.vue'

import ReviewCreateView from '@/views/ReviewCreateView.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'
import ReviewEditView from '@/views/ReviewEditView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/',  
    name: 'main',
    component: App
  },
  {
    path: '/community',  
    name: 'community',
    component: CommunityView
  },
  {
    path: '/movies/detail/:movieId',  
    name: 'movieDeatil',
    component: MovieDetailView
  },
  {
    path: '/movies/:genreId',  
    name: 'genreMovieList',
    component: MovieGenreView
  },
  {
    path: '/community/create',  
    name: 'reviewCreate',
    component: ReviewCreateView
  },
  {
    path: '/community/:reviewId',  
    name: 'reviewDetail',
    component: ReviewDetailView
  },
  {
    path: '/community/:reviewId/edit',  
    name: 'reviewEdit',
    component: ReviewEditView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
