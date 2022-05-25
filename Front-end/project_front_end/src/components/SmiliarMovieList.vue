<template>
  <div>
    <b-card-group class="d-flex justify-content-center">
    <similarCard v-for="similardetail in similar" :similardetail="similardetail" :key="similardetail.movieId" class='mx-3 row row-col-4'/>
    </b-card-group>
  </div>
</template>`1`

<script>
  import similarCard from '@/components/similarCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'SimiliarMovieListView',
    components: {
      similarCard,
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