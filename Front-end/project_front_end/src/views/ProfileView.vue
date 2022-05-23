<template>
  <div>
    <!-- user 정보 -->
    <h1>{{profile.username}}님의 프로필</h1>
    <h2> 로그인한 유저 정보 : {{currentUser.username}}</h2>

    <div v-if="profile.id !== currentUser.id">
      <!-- 팔로우 버튼 -->
      <form>
        <!-- 버튼 if문 바꿔주기 -->
        <input v-if="currentUser in profile.followers" type="submit" value = "언팔로우"> 
        <input v-else type="submit" value = "팔로우">
      </form>

    </div>


    <div>
      <!-- 팔로워 : {{ profile.followers.all|length }} / 팔로우: {{ profile.followings.all|length }} -->
      팔로워 : {{ profile.followers }} <br>
      팔로우 : {{ profile.followings }}
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
    ...mapGetters(['profile','currentUser'])
  },
  methods: {
    ...mapActions(['fetchProfile', 'fetchCurrentUser']),
  },
  created(){
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
  
}
</script>

<style>

</style>