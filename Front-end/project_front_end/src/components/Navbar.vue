<template>
<div class="d-block">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>  
    <b-navbar-brand class="fw-bold">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      영화사이트
    </b-navbar-brand>
      <!-- navbar 링크 목록, b-navbar-nav 내부에 값 넣기 -->
        <b-nav-item :to="{ name: 'main' }">Home</b-nav-item>
        <!-- 드롭다운 -->
    <b-nav-item-dropdown text="장르" right>
      
      <b-dropdown-item :to="{ name: 'genreMovieList', params: { genreId: 28 } }">액션</b-dropdown-item>
      <b-dropdown-item :to="{ name: 'genreMovieList', params: { genreId: 99 } }">다큐맨터리</b-dropdown-item>
      <b-dropdown-item :to="{ name: 'genreMovieList', params: { genreId: 16 } }" >애니메이션</b-dropdown-item>
      <b-dropdown-item :to="{ name: 'genreMovieList', params: { genreId: 27 } }">공포</b-dropdown-item>
      <b-dropdown-item :to="{ name: 'genreMovieList', params: { genreId: 10749 } }">로맨스</b-dropdown-item>
    </b-nav-item-dropdown>
          </b-navbar-nav>

      <!-- 검색창 -->
    <b-container fluid is-nav class="d-flex justify-content-end">
    <b-navbar-nav class="d-flex">
      <form class="d-flex">
        <b-form-input size="sm" class="mr-sm-2 my-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 mr-sm-0 mx-2" type="submit">검색</b-button>
      </form>
          <!-- if 분기- 로그인되어 있을 때 -->
        <b-nav-item-dropdown right v-if="isLoggedIn" class="ml-auto">
          <template #button-content>
            <em class="text-align-center">{{username}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>

          <!-- 로그인 아닐 경우 -->
          <b-nav-item-dropdown right v-if="!isLoggedIn" class="ml-auto">
          <template #button-content>
            <em>{{username}}</em>
          </template>
          <b-dropdown-item href="#">Login</b-dropdown-item>
          <b-dropdown-item href="#">signup</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      </b-container>
  </b-navbar>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['isLoggedIn','currentUser']),
    username(){
      return this.currentUser.username ? this.currentUser.username : 'guest'
    },
  },
  
}
</script>

<style>
</style>


