<template>
  <div>
    <h2> Reviews </h2>

    <ul v-for="review in reviews" :key="review.pk">
        <li v-if="review.movie === movieId">
          <router-link :to="{name:'review', params: {reviewPk: review.pk} }"> 
            <p>title : {{review.title}}</p>
          </router-link>
          <router-link :to="{name:'profile', params: {username: review.user.username} }"> 
            <p>작성자 : {{review.user.username}}</p>
          </router-link>
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