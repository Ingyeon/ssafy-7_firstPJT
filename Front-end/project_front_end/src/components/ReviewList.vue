<template>
  <div>
    <h2> Reviews </h2>

    <ul v-for="review in reviews" :key="review.pk">
        <li v-if="review.movie == movieId">
          <router-link :to="{name:'review', params: {reviewPk: review.pk} }"> 
            <p>title : {{review.title}}</p>
          </router-link>
          <p>{{review.user.username}}</p>
        </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ReviewList',
  props: {
    movieId : Number,
  },
  computed: {
    ...mapGetters(['reviews'])

  },
}
</script>

<style>

</style>