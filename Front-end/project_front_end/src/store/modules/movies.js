import axios from 'axios'
import router from '@/router'
import drf from '@/api/drf'

export default {
    state: {
        movies: [],
        movie: [],
        genre: [],
    },
    getters: {
        movies: state => state.movies,
        movie: state => state.movie,
        genre: state => state.genre,
    },
    
    mutations: {
        SET_MOVIES: (state,movies) => state.movies = movies,
        SET_MOVIE: (state, movie) => state.movie = movie,
        SET_GENRE: (state,genre) => state.genre = genre,
    },
  
    actions: {
        // 영화 전체 목록 state 저장
        fetchMovies({commit, getters}){
            axios({
                url: drf.movies.movies(),
                method: 'get',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_MOVIES', res.data)) 
            .catch(err => console.error(err.response))
        },
        // 개별 영화 state
        fetchMovie({commit, getters},movieId){
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
        // 전체 장르 목록 state
        fetchGenre({commit, getters}){
            axios({
                url: drf.movies.genres(),
                method: 'get',
                headers: getters.authHeader,
            })
            .then(res => commit('SET_GENRE', res.data))
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