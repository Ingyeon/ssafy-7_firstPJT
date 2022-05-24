<template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default {
  name: "BoardList",
  data() {
    let contentItems = this.reviews.sort((a, b) => {
      return b.pk - a.pk;
    }) // 내림차순

    // User 와 Content 의 user_id 의 같은 번호를 찾아 Content 에 기존자료 + 'user_name' 으로 추가한다.
    let items = contentItems.map(contentItem => {
      return {
        ...contentItem,
        user_name: this.reviews.filter(userItem => {
          return contentItem.user === userItem.user;
        })[0].user
      }
    })
    return {
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      // bootstrap 'b-table' 필드 설정
      fields: [
        {
          key: "pk",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "user",
          label: "글쓴이"
        },
        {
          key: "created_at",
          label: "작성일"
        }
      ],
      items: items
    }
  },
    computed: {
      ...mapGetters(['reviews']),
      rows() {
      return this.items.length;
    }
  },
  methods: {
    rowClick(review) {  // 게시글 보내기
      this.$router.push({
        path: `/community/${review.pk}`
      });
    },
    writeContent() {  // 글쓰기로 보내기
      this.$router.push({
        path: `/community/create`
      })
    },
    ...mapActions(['fetchReviews'])},
    created() {
      this.fetchReviews()
    },
}
</script>