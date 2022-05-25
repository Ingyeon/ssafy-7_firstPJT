<template>
  <div>
    ReviewEdit
    <ReviewForm v-if="isReview" :review="review" action="update"/>
  </div>
  
</template>

<script>
// 수정 해야함

import ReviewForm from '@/components/ReviewForm.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ReviewEditView',
  components: {
    ReviewForm
  },
  computed: {
    ...mapGetters(['review','isReview',])
  },
  methods: {
    ...mapActions(['fetchReview'])
  },
  // created() {
  //   this.fetchReview(this.$route.params.reviewPk)
  // }
}
</script>

<style>

</style>