<template>
  <div>
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
    <b-card-img :src= "`https://image.tmdb.org/t/p/w300${movie.poster_path}`"/>
    <b-card-title> {{ movie.title }} </b-card-title>
    </b-card>
  </div>
</template>

<script>
  // import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'MovieCard',

    props: {
      movie: Object
    },
    data() {
      return {
        movieinfo: {
          movieId: this.movie.movie_id,
          title: this.movie.title,
          posterPath: this.movie.poster_path,
        }
      }
    },
    
  }
</script>

<style>

</style>