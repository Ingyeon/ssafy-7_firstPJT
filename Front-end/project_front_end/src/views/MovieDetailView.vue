<template>
  <div>
    <div>
      <h3> movie detail</h3>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
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
                    <button v-if="likeCheck" @click="likeMovie(movieId)"><font-awesome-icon icon="fa-solid fa-heart" /></button>
                    <button v-else @click="likeMovie(movieId)"><font-awesome-icon icon="fa-regular fa-heart" /></button>

              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <!-- review -->
    <router-link :to="{ name: 'reviewCreate' }"> 새 리뷰 작성 </router-link>
    <!-- <router-link :to="{ name: 'reviewCreate' , params:{ movieId : movieId} }"> 새 리뷰 작성 </router-link> -->
    <!-- <ReviewList :reviews="review.movie_review"/> -->
    <!-- <ReviewList/> -->
  </div>
</template>

<script>

// import ReviewList from '@/components/ReviewList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieDetailView',
  components: {
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
      let flag = false
      const fol = this.movie.movie_like
      for(let i=0 ; i < fol.length; i++ ) {
        if (fol[i] === this.currentUser.pk) {
          flag = true
          break
        }
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

</style>