<template>
  <div>
    <router-link 
    @click.native="setLocalMovie(similardetail.movie_id)"
     :to="{ name: 'SimilarDetail', params: { movieId: similardetail.movie_id } }">
      <b-card
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        
      >
      <b-card-img :src= "`https://image.tmdb.org/t/p/w300${similardetail.poster_path}`"/>
      <b-card-title> {{ similardetail.title }} </b-card-title>
      </b-card>
    </router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'similarCard',
    props: {
      similardetail: Object
    },
    
    methods: {
      ...mapActions(['fetchSimilarDetail','likeMovie']),
      setLocalMovie(movieid) {
        this.fetchSimilarDetail(movieid)
      }
    }
  }
</script>

<style>

</style>