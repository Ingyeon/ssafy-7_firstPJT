import axios from 'axios'
import router from '@/router'
import drf from '@/api/drf'

export default {
    state: {
        currentUser: {},
        movies: [],
        movie: [],
        genre: [],
        similar: [],
    },
    getters: {
        movies: state => state.movies,
        movie: state => state.movie,
        genre: state => state.genre,
        similar: state => state.similar,
        // isLoggedIn: state => !!state.token,
        // currentUser: state => state.currentUser,
        // authHeader: state => ({ Authorization: `Token ${state.token}`})
    },
    
    mutations: {
        SET_MOVIES: (state,movies) => state.movies = movies,
        SET_MOVIE: (state, movie) => state.movie = movie,
        SET_GENRE: (state,genre) => state.genre = genre,
        SET_SIMILAR: (state,similar) => state.similar = similar,
        // SET_CURRENT_USER: (state, user) => state.currentUser = user,
    },
  
    actions: {
        // fetchCurrentUser({ commit, getters, dispatch }) {
      
        //     if (getters.isLoggedIn) {
        //       axios({
        //         url: drf.accounts.currentUserInfo(),
        //         method: 'get',
        //         headers: getters.authHeader,
        //       })
        //         .then(res => commit('SET_CURRENT_USER', res.data))
        //         .catch(err => {
        //           if (err.response.status === 401) {
        //             dispatch('removeToken')
        //             router.push({ name: 'login' })
        //           }
        //         })
        //     }
        //   },

        // 영화 전체 목록 state 저장
        fetchMovies({ commit, getters }){
            axios({
                url: drf.movies.movies(),
                method: 'get',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_MOVIES', res.data)) 
            .catch(err => console.error(err.response))
        },
        // 개별 영화 state
        fetchMovie({commit , getters},movieId){
            axios({
                url: drf.movies.movie(movieId),
                method: 'get',
                headers: getters.authHeader, 
            })
            .then(res => commit('SET_MOVIE', res.data))
            .catch(err => {
                console.error(err.response)
                if (err.response.status === 404){
                    router.push({ name: 'NotFound404' })
                }
            })
        },
        // 장르별 영화 목록 state 저장
        fetchGenre({commit, getters},genreId){
            axios({
                url: drf.movies.genres(genreId),
                method: 'get',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_GENRE', res.data))
            .catch(err => console.error(err.response))
        },
        fetchSimilar({commit, getters},movieId){
            axios({
                url: drf.movies.similar(movieId),
                method: 'get',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_SIMILAR', res.data))
            .catch(err => console.error(err.response))
        },
        
        // 개별 영화 좋아요 
        likeMovie({commit, getters},movieId){
            axios({
                url: drf.movies.likeMovie(movieId),
                method: 'post',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_MOVIE', res.data))
            .catch(err => console.error(err.response))
        },
      },
  }