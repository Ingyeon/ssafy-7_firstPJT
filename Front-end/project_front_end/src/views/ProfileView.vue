<template>
  <div>
    <!-- user 정보 -->
    <h1>{{profile.username}}님의 프로필</h1>
    
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
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created(){
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>