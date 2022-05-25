<template>
  <div>
    <h1>Community</h1>
    <!-- movieid 랑 매핑 안됨 -->
    <!-- <router-link :to="{ name: 'reviewCreate' }">리뷰 작성</router-link> -->
    <hr>
    <!-- <div>
      <b-table striped hover :items="items"></b-table>
    </div> -->
    <ul>
      <li v-for="review in reviews" :key="review.pk">
        <!-- 작성자 -->
        
        
        {{ review.user.username }} : 

        <!-- 글 이동 링크 (제목) -->
        <router-link 
          :to="{ name: 'review', params: {reviewPk: review.pk} }">
          {{ review.title }}
        </router-link>

        <!-- 댓글 개수/좋아요 개수 -->
        =>
        ({{ review.comment_count }}) | +{{ review.like_count }}

      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CommunityView',
    components: {
    },

    // data(){
    //   const items = []
    //   const rvs = this.reviews

    //   // for (let i ; i < rvs.lenth ; i++) {
    //   //   items.push({ 
    //   //   })
    //   // }


    //   return {
    //     items : [

    //     ]
    //   }
    // },

    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style></style>
