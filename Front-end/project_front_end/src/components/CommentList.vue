<template>
  <div class="comment-list">
    
    <ul>
      <CommentListItem
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.pk" />
    </ul>

    <CommentListForm/>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'

export default {
  name: 'CommentList',
  components: [
    CommentListForm,
    CommentListItem
  ],
  props: {
    comments: Array
  },
}
</script>

<style>
.comment-list {
  border: 1px solid blue;
}
</style>