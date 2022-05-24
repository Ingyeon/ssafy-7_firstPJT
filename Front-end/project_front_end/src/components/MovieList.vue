<template>
  <div>
    <!-- <MovieCard/> -->
    <b-card-group class="d-flex justify-content-center">
    <MovieCard v-for="movie in movies" :movie="movie" :key="movie.movieId" class='mx-3 row row-col-4'/>
    </b-card-group>
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