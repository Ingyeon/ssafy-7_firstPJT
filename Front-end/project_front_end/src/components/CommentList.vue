<template>
  <div>
    <CommentListForm/>
    <ul>
      <CommentListItem/>
    </ul>
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
  ]
}
</script>

<style>

</style>