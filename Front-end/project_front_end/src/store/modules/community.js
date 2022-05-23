import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'


// router로 보내지는 경우 임시로 community 메인 화면으로 보냄
// 핵심 기능 구현 후 리뷰 메인화면에 대해 논의합시다
export default {

  state: {
    reviews: [],
    review: {},
  },

  getters: {
    reviews: state => state.reviews,
    review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.review),
  },

  mutations: {
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,
    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comments = comments),
  },

  actions: {
    // 리뷰 목록
    fetchreviews({ commit, getters }) {
      axios({
        url: drf.community.reviews(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEWS', res.data))
        .catch(err => console.error(err.response))
    },

    // // 특정 영화 리뷰 목록
    // fetchMovieReviews({ commit, getters }, { movieId }) {
    //   axios({
    //     url: drf.community.reviews(),
    //     method: 'get',
    //     headers: getters.authHeader,
    //   })
    //     .then(res => commit('SET_REVIEWS', res.data))
    //     .catch(err => console.error(err.response))
    // },

    // 단일 리뷰
    fetchreview({ commit, getters }, reviewPk) {

      axios({
        url: drf.community.review(reviewPk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    // 리뷰 생성
    createreview({ commit, getters },{movieId, review}) {
      
      axios({
        url: drf.community.reviews(),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'community',
            params: { 
              reviewPk: getters.review.pk,
              movieId: movieId
             }
          })
        })
    },

    // 리뷰 수정
    updatereview({ commit, getters }, { pk, title, content, movie }) {
      axios({
        url: drf.community.review(pk),
        method: 'put',
        data: { title, content, movie },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'community',
            params: { reviewPk: getters.review.pk }
          })
        })
    },

    // 리뷰 삭제
    deletereview({ commit, getters }, reviewPk) {

      if (confirm('리뷰를 삭제할까요?')) {
        axios({
          url: drf.community.review(reviewPk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_REVIEW', {})

            router.push({ name: 'community' })
          })
          .catch(err => console.error(err.response))
      }
    },

    // 리뷰 좋아요
    likereview({ commit, getters }, reviewPk) {

      axios({
        url: drf.community.likeReview(reviewPk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => console.error(err.response))
    },

    // 댓글 생성
	createComment({ commit, getters }, { reviewPk, content }) {
      const comment = { content }

      axios({
        url: drf.community.comments(reviewPk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    // 댓글 수정
    updateComment({ commit, getters }, { reviewPk, commentPk, content }) {
      const comment = { content }

      axios({
        url: drf.community.comment(reviewPk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    // 댓글 삭제
    deleteComment({ commit, getters }, { reviewPk, commentPk }) {

        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.community.comment(reviewPk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_REVIEW_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },
  },
}
