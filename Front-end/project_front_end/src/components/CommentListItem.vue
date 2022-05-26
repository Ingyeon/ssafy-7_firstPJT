<template>
  <ol class="list-group w-75 mx-auto">
    <li class="list-group-item d-flex justify-content-between align-items-start" >
    <div class="ms-2 me-auto">
    <router-link class='fw-bold' :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>
    <span v-if="!isEditing">{{ payload.content }}</span>
        <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate" class='badge bg-primary rounded-pill mr-4'>Update</button> 
      <button @click="switchIsEditing" class='badge bg-primary rounded-pill'>Cancel</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing" class='badge bg-primary rounded-pill'>Edit</button> 
      <button @click="deleteComment(payload)" class='badge bg-primary rounded-pill'>Delete</button>
    </span>
    </div>


    </li>
  </ol>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        reviewPk: this.comment.review,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },
}
</script>

<style>

</style>