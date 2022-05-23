<template>
  <div>
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      controls
      fade
      indicators
      label-next = ''
      label-prev = ''
      img-width="1024"
      img-height="480"
      style="text-shadow: 0px 0px 2px #000"
    >

      <b-carousel-slide
        img-src="https://www.lunchbox-productions.com/wp-content/uploads/2021/10/Shows-Like-Carnival-Row-1024x480.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://www.lunchbox-productions.com/wp-content/uploads/2021/10/Movies-Like-Predestination-1024x480.jpg">
      </b-carousel-slide>

      <b-carousel-slide img-src="https://www.lunchbox-productions.com/wp-content/uploads/2021/10/Movies-Like-Miss-Congeniality-1024x480.jpg"></b-carousel-slide>

    <!-- 슬라이드 사이즈 조정시 다음과 같이 가능 -->
    <!-- 영화 포스터를 케러셀로 넣을 시 안이쁘고 사이즈가 너무 큽니다. 적당한 다른 이미지를
    구하는게 좋아보여요 -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://maxxolife.com/wp-content/uploads/2021/06/new.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>


<!-- 케러셀 아래에 보여줄 영화 카드들 -->
    <MovieList/>
  </div>
</template>

<script>
  import MovieList from '@/components/MovieList.vue'
  import { mapGetters,mapActions } from 'vuex'
  export default {
    components: {
      MovieList
    },
    computed: {
    ...mapGetters(['movies']),
  },
    methods: {
      ...mapActions(['fetchMovies']),
    },
    created() {
      this.fetchMovies()
    }
  }
</script>
