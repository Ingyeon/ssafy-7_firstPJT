<template>
    <form @submit.prevent="onSubmit">
      <div>ReviewForm</div>
      <div>
        받아온 movieid 정보: {{ $route.params.movieId }}
      </div>
      <div>
        <label for="title">title: </label>
        <input v-model="newReview.title" type="text" id="title" />
      </div>
      <div>
        <label for="content">content: </label>
        <textarea v-model="newReview.content" type="text" id="content"></textarea>
      </div>
      <div>
        <label for="rank">rank: </label>
        <textarea v-model="newReview.rank" type="text" id="content"></textarea>
      </div>
      <div>
        <button>{{ action }}</button>
      </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ReviewForm',
  props: {
    review: Object,
    action: String,
  },

  data() {
    return {
      newReview: {
        movie: this.$route.params.movieId,
        title: this.review.title,
        content: this.review.content,
        rank: this.review.rank,
      }
    }
  },

  methods: {
    ...mapActions(['createreview','updatereview']),
    onSubmit() {
      if (this.action === 'create') {
        this.createreview(this.newReview)
      } else if (this.action === 'update') {
        const payload = {
          pk: this.review.pk,
          ...this.newReview,
        }
        this.updatereview(payload)
      }
    }
  }

}
</script>

<style>

</style>