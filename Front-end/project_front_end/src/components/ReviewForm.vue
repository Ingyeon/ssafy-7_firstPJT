<template>
    <form @submit.prevent="onSubmit">
      <div>ReviewForm</div>
      <div>
        getter : {{movie.movie_id}}<br>
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
        <input v-model="newReview.rank" type="number" min="0" max="10"  id="content"/>
      </div>
      <div>
        <button>{{ action }}</button>
      </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ReviewForm',
  props: {
    review: Object,
    action: String,
  },
  
  computed: {
    ...mapGetters(['movie']),
  },

  data() {
    return {
      newReview: {
        title: this.review.title,
        content: this.review.content,
        rank: this.review.rank,
      }
    }
  },

  methods: {
    ...mapActions(['createReview','updateReview']),
    onSubmit() {
      if (this.action === 'create') {
        const payload = {
          movie: this.movie.movie_id,
          ...this.newReview,
        }
        this.createReview(payload)
      } else if (this.action === 'update') {
        const payload = {
          pk: this.review.pk,
          ...this.newReview,
        }
        this.updateReview(payload)
      }
    }
  },

}
</script>

<style>

</style>