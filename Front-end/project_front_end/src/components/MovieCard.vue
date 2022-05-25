<template>
  <div>
    <router-link 
    @click.native="setLocalMovie(movie.movie_id)"
     :to="{ name: 'MovieDetail', params: { movieId: movie.movie_id } }">
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
    </router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'MovieCard',

    props: {
      movie: Object
    },
    
    methods: {
      ...mapActions(['fetchMovie','likeMovie']),
      setLocalMovie(movieid) {
        this.fetchMovie(movieid)
      }
    }
  }
</script>

<style>

</style>