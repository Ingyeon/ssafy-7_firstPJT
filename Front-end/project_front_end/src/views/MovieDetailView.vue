<template>
  <div>
    <div>
      <h3> movie detail</h3>
      <b-card no-body class="overflow-hidden mx-auto" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src= "`https://image.tmdb.org/t/p/w300${movie.poster_path}`" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-title> {{ movie.title }} </b-card-title>
              <b-card-text>
                개봉일 : {{ movie.release_date }}
              </b-card-text>
              <b-card-text>
                관람객 수 : {{ movie.popularity }}
              </b-card-text>
              <b-card-text>
                줄거리 : {{ movie.overview }}
              </b-card-text>
              <b-card-text>
                    좋아요:
                    <button v-if="likeCheck" @click="likeMovie(movieId)"><font-awesome-icon icon="fa-solid fa-heart" class=red /></button>
                    <button v-else @click="likeMovie(movieId)"><font-awesome-icon icon="fa-regular fa-heart"/></button>

              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <!-- review -->
    <!-- <router-link :to="{ name: 'reviewCreate' }"> 새 리뷰 작성 </router-link> -->
    <router-link :to="{ name: 'reviewCreate'/* , params:{ movieId : movieId }*/ }"> 새 리뷰 작성 </router-link>
    <!-- <ReviewList :reviews="review.movie_review"/> -->
    <!-- <ReviewList/> -->
    <hr>
    <h2 class='mx-auto mb-3 w-50 my-3 p-3 mb-2 bg-secondary bg-gradient text-white'>{{movie.title}}을 보신 분들이 같이 찾은 영화는 어떠세요?</h2>
    <smiliar-movie-list/>

  </div>
</template>

<script>
// import ReviewList from '@/components/ReviewList.vue'
import SmiliarMovieList from '@/components/SmiliarMovieList.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MovieDetailView',
  components: {
    SmiliarMovieList
    // ReviewList
  },
  data() {
    return {
      movieId: this.$route.params.movieId
    }
  },

  computed: {
    ...mapGetters(['movie','currentUser']),
    likeCheck(){
      // 제대로 작동 안하는중 (고쳐야함)
      // movie_like에 유저 id가 일치해야만 하트 표시되게 바꾸기
      const fol = this.movie.movie_like
      let flag = false
        if (this.currentUser.pk in fol) {
          flag = true
        }
          return flag
    },
    },
  methods: {
    ...mapActions([
      'fetchMovie',
      'likeMovie',
    ])
  },
  created(){
    this.fetchMovie(this.movieId)
    this.likeMovie(this.movieId)
  }
}
</script>

<style>
.red {
  color: red;
}
</style>