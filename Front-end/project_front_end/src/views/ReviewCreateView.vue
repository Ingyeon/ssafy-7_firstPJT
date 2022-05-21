<template>
  <div>
    Create Review
    <ReviewForm :review="review" action="create" />
  </div>
</template>

<script>
// moviedetail에서 넘어오게 해주고, movieid 무조건 넘겨받아야하게 수정해야함

import ReviewForm from '@/components/ReviewForm.vue'
export default {
  name: 'ReviewCreateView',
  components: {
    ReviewForm
  },
  data() {
    return {
      review: {
        pk: null,
        title: '',
        content: '',
        rank: '',
      }
    }
  }

}
</script>

<style>

</style>

