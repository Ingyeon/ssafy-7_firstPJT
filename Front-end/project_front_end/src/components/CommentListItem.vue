<template>
  <ol class="list-group list-group-horizontal w-75 mx-auto">
      <li class="list-group-item">
    <router-link class='fw-bold' :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>
      </li>
    <li class="list-group-item flex-fill" v-if="!isEditing">{{ payload.content }}</li>
        <li v-if="isEditing" >
      <input type="text" v-model="payload.content">
      <button @click="onUpdate" class='badge bg-primary rounded-pill mx-1 mt-2'>Update</button> 
      <button @click="switchIsEditing" class='badge bg-danger rounded-pill'>Cancel</button>
    </li>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing" class='badge bg-primary rounded-pill mx-1 mt-2'>Edit</button> 
      <button @click="deleteComment(payload)" class='badge bg-danger rounded-pill'>Delete</button>
    </span>
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