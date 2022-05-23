<template>
  <div>
    <h1>{{profile.username}}님의 프로필</h1>
    <!-- user 정보 -->
    

    <!-- 좋아요, 찜한 영화 리스트 -->

    <!-- 리뷰 남긴 글 -->

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