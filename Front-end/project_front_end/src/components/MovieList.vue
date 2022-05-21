<template>
  <div>
    MovieListView_p
    <!-- <MovieCard/> -->
    <MovieCard v-for="movie in movies" :movie="movie" :key="movie.movieId" />
  </div>
</template>

<script>
  import MovieCard from '@/components/MovieCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'movieListView',
    components: {
      MovieCard,
    },
    computed: {
      ...mapGetters(['movies']),
    },
    methods: {
      ...mapActions(['fetchMovies'])
    },
    created() {
      this.fetchMovies()
    }

  }
</script>

<style>

</style>