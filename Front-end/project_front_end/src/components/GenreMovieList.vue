<template>
  <div>
    <MovieCard v-for="movie in genre" :movie="movie" :key="movie.movieId" />
  </div>
</template>

<script>
  import MovieCard from '@/components/MovieCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'GenreMovieListView',
    components: {
      MovieCard,
    },
    data() {
    return {
      genreId: this.$route.params.genreId
    }
   },
    computed: {
      ...mapGetters(['genre']),
    },
    methods: {
      ...mapActions(['fetchGenre'])
    },
    created() {
      this.fetchGenre(this.genreId)
    }
  }
</script>

<style>

</style>