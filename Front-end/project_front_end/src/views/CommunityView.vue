<template>
  <div>
    <h2 class="mx-auto mb-3 w-50 my-3 p-3 mb-2 bg-secondary bg-gradient text-white"> 전체 리뷰 </h2>
    <b-table hover :items="makeLists()">
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CommunityView',
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
        {
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

<style></style>
