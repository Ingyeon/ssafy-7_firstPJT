import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

// import App from '@/App.vue'

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
import NotFound404 from '@/views/NotFound404.vue'
import MainView from '@/views/MainView.vue'
import SearchView from '@/views/SearchView.vue'
import SimilarDetailView from '@/views/SimilarDetailView.vue'

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
  // 추가 필요한가...??
  {
    path: '/profile/:userPk/follow',
    name: 'follow',
    component: ProfileView // 수정필요
  },
  //
  {
    path: '/',  
    name: 'main',
    component: MainView
  },
  { path: '/search/:movieTitle',
    name: 'search',
    component: SearchView

  },
  { // 전체 리뷰 목록
    path: '/community',  
    name: 'community',
    component: CommunityView
  },
  {
    path: '/movies/detail/:movieId',  
    name: 'MovieDetail',
    component: MovieDetailView
  },
  {
    path: '/movies/similardetail/:movieId',
    name: 'SimilarDetail',
    component: SimilarDetailView
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
  { // 리뷰 디테일
    path: '/community/:reviewPk',  
    name: 'review',
    component: ReviewDetailView,
    // 임시
    props: true
  },
  {
    path: '/community/:reviewPk/edit',  
    name: 'reviewEdit',
    component: ReviewEditView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(){
    return {x:0 , y:0}
  },
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 이전 페이지에서 발생한 에러메시지 삭제
//   store.commit('SET_AUTH_ERROR', null)

//   const { isLoggedIn } = store.getters

//   const noAuthPages = ['login', 'signup']

//   const isAuthRequired = !noAuthPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {
//     alert('Require Login. Redirecting..')
//     next({ name: 'login' })
//   } else {
//     next()
//   }

//   if (!isAuthRequired && isLoggedIn) {
//     next({ name: 'articles' })
//   }
// })

/*
Navigation Guard 설정
  (이전 페이지에서 있던 에러 메시지 삭제)

  로그인(Authentication)이 필요 없는 route 이름들 저장(/login, /signup)

  0. router 에서 이동 감지

  1. 현재 이동하고자 하는 페이지가 로그인이 필요한지 확인
  
  2. 로그인이 필요한 페이지인데 로그인이 되어있지 않다면
    로그인 페이지(/login)로 이동

  3. 로그인이 되어 있다면
    원래 이동할 곳으로 이동
  
  4. 로그인이 되어있는데 /login, /signup 페이지로 이동한다면
    메인 페이지(/)로 이동
    

*/

export default router