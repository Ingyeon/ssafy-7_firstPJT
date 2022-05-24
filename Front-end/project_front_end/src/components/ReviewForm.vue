<template>
    <form @submit.prevent="onSubmit">
      <div>ReviewForm</div>
      <div>
        getter : {{movie.movie_id}}<br>
        ?? : {{this.$route.params.movie_id}}
      </div>
      <div>
        <label for="title">title: </label>
        <input v-model="newReview.title" type="text" id="title" />
      </div>
      <div>
        <label for="content">content: </label>
        <textarea v-model="newReview.content" type="text" id="content"></textarea>
      </div>
      <!-- <div>
        <label for="rank">rank: </label>
        <textarea v-model="newReview.rank" type="text" id="content"></textarea>
      </div> -->
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
        // movie: this.$route.params.movie_id,
        // movietmp: this.$stmovie.movieId,
        // rank: this.review.rank,
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