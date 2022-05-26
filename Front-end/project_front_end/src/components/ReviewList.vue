<template>
  <div>
    <h2> Reviews </h2>
    <b-table hover :items="makeLists()" @row-clicked="rowClick">
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
    ...mapGetters(['reviews','fetchReviews']),
    
  },
  methods: {
    // movie id에 맞는 리뷰 리스트
    makeLists(){
      const reviewlist = []
      for(let reviewitem of this.reviews ) {
        if(reviewitem.movie === this.movieId) {
          console.log(reviewitem)
            reviewlist.push({
              번호: reviewitem.pk,
              제목: reviewitem.title,
              작성자: reviewitem.user.username,
              좋아요: reviewitem.like_count,
              영화: reviewitem.movie_title,
              댓글: reviewitem.comment_count,
            })
        }
      }
      return reviewlist
    },
      rowClick(item){
      console.log(item)
      this.$router.push({
        path: `/community/${item.번호}`
      })
    }    
  },
  created(){
    this.fetchReviews()
  }
}
</script>

<style>

</style>