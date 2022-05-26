<template>
  <div>
    <!-- user 정보 -->
    <h3 class="mt-4 mb-2">{{profile.username}} 님의 프로필</h3>
    <div style="max-width:400px;" class="mx-auto d-flex justify-content-around">
      <!-- 팔로워 : {{ profile.followers.all|length }} / 팔로우: {{ profile.followings.all|length }} -->
      <span> 팔로워 : {{ followerCount }} </span>
      <span> 팔로우 : {{ followingCount }} </span>
    </div>
    <div v-if="profile.pk !== currentUser.pk">
      <!-- 팔로우 버튼 -->
      <button v-if="checkList" @click="follow(profile.pk)"> 언팔로우 </button>
      <button v-else @click="follow(profile.pk)"> 팔로우 </button>
    </div>
    <hr>
    <!-- 좋아요한 영화 목록 -->
    <div>
      <h2>{{profile.username}} 님이 좋아요한 영화</h2>
      <ul>
        <li>
          <p>{{like.title}}</p>
        </li>
        
      </ul>
    </div>

    
    <!-- 작성한 리뷰 목록-->
    <h2>{{profile.username}} 님이 작성한 리뷰</h2>
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
    ...mapGetters(['profile','currentUser','like']),
    // 자바스크립트 어케고치기
    checkList() {
      let flag = false
      const fol = this.profile.followers
      for(let i=0 ; i < fol.length; i++ ) {
        if (fol[i].pk === this.currentUser.pk) {
          flag = true
          break
        }
      }
      return flag
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