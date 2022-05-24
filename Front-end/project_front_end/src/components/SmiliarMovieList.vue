<template>
  <div>
    <b-card-group class="d-flex">
    <MovieCard v-for="movie in similar" :movie="movie" :key="movie.movieId" class='col-3'/>
    </b-card-group>
  </div>
</template>

<script>
  import MovieCard from '@/components/MovieCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'SimiliarMovieListView',
    components: {
      MovieCard,
    },
    data() {
    return {
      movieId: this.$route.params.movieId
    }
   },
    computed: {
      ...mapGetters(['similar']),
    },
    methods: {
      ...mapActions(['fetchSimilar'])
    },
    created() {
      this.fetchSimilar(this.movieId)
    }
  }
</script>

<style>

</style>