<template>
  <div>
    <h2> Reviews </h2>
    <b-table hover :items="makeLists()">
      <!-- <template #cell(title)="data">
        <router-link :to="{name:'review', params: {reviewPk: review.pk} }"> 
            <span>   title : {{review.title}}   </span>
          </router-link>
          {{data.title}}
      </template> -->

    </b-table>

    <b-list-group v-for="review in reviews" :key="review.pk">
        <b-list-group-item v-if="review.movie === movieId" class="">
          <router-link :to="{name:'review', params: {reviewPk: review.pk} }"> 
            <span>   title : {{review.title}}   </span>
          </router-link> 
          <router-link :to="{name:'profile', params: {username: review.user.username} }"> 
            <span>   작성자 : {{review.user.username}}   </span>
          </router-link>
          <span>
            {{review.like_count}}
          </span>
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
    ...mapGetters(['reviews']),
    
  },
  methods: {
    // movie id에 맞는 리뷰 리스트
    makeLists(){
      const reviewlist = []
      for(let reviewitem of this.reviews ) {
        if(reviewitem.movie === this.movieId) {
          console.log(reviewitem)
            reviewlist.push({
              title: reviewitem.title,
              username: reviewitem.user.username,
              like_count: reviewitem.like_count,
              movie: reviewitem.movie_title,
              comment_count: reviewitem.comment_count,
            })
        }
      }
      return reviewlist
    },  
  }
}
</script>

<style>

</style>