<template>
  <div>
    <h2> Reviews </h2>

    <ul v-for="review in reviews" :key="review.pk">
        <li v-if="review.movie_id == movieId">
          {{review.title}}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ReviewList',
  props: {
    movieId : Number,
  },
  computed: {
    ...mapGetters(['reviews'])
  },
  methods: {
    ...mapActions(['fetchReviews'])
  },
  created(){
    this.fetchReviews()
  }
}
</script>

<style>

</style>