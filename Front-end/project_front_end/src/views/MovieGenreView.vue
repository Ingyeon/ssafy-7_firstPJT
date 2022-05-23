<template>
  <div>
    <p>선택한 장르의 영화 목록입니다.</p>
  <GenreMovieList/>
  </div>

</template>

<script>
import GenreMovieList from '@/components/GenreMovieList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieGenreView',
  components: {
    GenreMovieList,
},
  data() {
    return {
      genreId: this.$route.params.genreId
    }
  },

  computed: {
    ...mapGetters(['genre']),
  },
  methods: {
    ...mapActions([
      'fetchGenre'
    ])
  },
  created(){
    this.fetchGenre(this.genreId)
  },
}
</script>

<style>

</style>