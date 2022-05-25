<template>
  <div>
    <h2> Reviews </h2>
    <b-list-group v-for="review in reviews" :key="review.pk">
        <b-list-group-item v-if="review.movie === movieId" class="">
          <router-link :to="{name:'review', params: {reviewPk: review.pk} }"> 
            <span>title : {{review.title}}</span>
          </router-link> 
          <router-link :to="{name:'profile', params: {username: review.user.username} }"> 
            <span>작성자 : {{review.user.username}}</span>
          </router-link>
        </b-list-group-item>
    </b-list-group>

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