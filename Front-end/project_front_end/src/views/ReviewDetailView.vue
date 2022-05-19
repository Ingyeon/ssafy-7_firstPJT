<template>
  <div>
    <!-- review -->
    <p>리뷰 제목</p>
    <p>영화제목</p>
    <p>작성자</p>
    <p>리뷰 내용</p>
    <p>좋아요버튼</p>
    <!-- comment -->
    <CommentList/>
  </div>
</template>

<script>
  import CommentList from '@/components/CommentList.vue'

  export default {
    name: 'ReviewDetailView',
    components: {
      CommentList,
    }

  }
</script>

<style>

</style>