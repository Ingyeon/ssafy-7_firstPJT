<template>
  <div>
    <!-- user 정보 -->
    <h1>{{profile.username}} 님의 프로필</h1>
    <h2> 로그인한 유저 정보 : {{currentUser.username}}</h2>

    <div v-if="profile.pk !== currentUser.pk">
      <!-- 팔로우 버튼 -->
      <!-- v-if="currentUser in profile.followers" v-for랑 v-if 같이쓰지 말라했는데.. -->
      
      <button v-if="checkList" @click="follow(profile.pk)"> 언팔로우 </button>
      <button v-else @click="follow(profile.pk)"> 팔로우 </button>

    </div>


    <div>
      <!-- 팔로워 : {{ profile.followers.all|length }} / 팔로우: {{ profile.followings.all|length }} -->
      팔로워 : {{ followerCount }} <br>
      팔로우 : {{ followingCount }}
    </div>
    
    <!-- 작성한 리뷰 목록-->
    <h2>내가 작성한 리뷰</h2>
    <ul>
      <li v-for="review in profile.reviews" :key="review.pk">
        <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
          {{ review.title }}
        </router-link>
      </li>
    </ul>
    <!-- 좋아요, 찜한 영화 리스트 -->

    <!-- 추천 알고리즘 영화리스트 -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile','currentUser']),
    // 자바스크립트 어케고치기
    checkList() {
      console.log(this.profile.followers.some(item => item === this.currentUser.pk))
      return this.currentUser.pk in this.profile.followers? true : false
    },
    followerCount() {
      return this.profile.followers?.length
    },
    followingCount() {
      return this.profile.followings?.length
    }
  },
  methods: {
    ...mapActions(['fetchProfile', 'fetchCurrentUser','follow']),
  },
  created(){
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
  
}
</script>

<style>

</style>