import axios from 'axios'
import router from '@/router'
import drf from '@/api/drf'

export default {
    state: {
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
    },
    
    mutations: {
        SET_MOVIES: (state,movies) => state.movies = movies,
        SET_MOVIE: (state, movie) => state.movie = movie,
        SET_GENRE: (state,genre) => state.genre = genre,
        SET_SIMILAR: (state,similar) => state.similar = similar,
    },
  
    actions: {
        // 영화 전체 목록 state 저장
        fetchMovies({ commit }){
            axios({
                url: drf.movies.movies(),
                method: 'get',
            })
            .then(res => commit('SET_MOVIES', res.data)) 
            .catch(err => console.error(err.response))
        },
        // 개별 영화 state
        fetchMovie({commit /*, getters*/},movieId){
            axios({
                url: drf.movies.movie(movieId),
                method: 'get',
                // headers: getters.authHeader, // 아직 인증여부 필요 없어서 일단은 주석처리함
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
        fetchGenre({commit},genreId){
            axios({
                url: drf.movies.genres(genreId),
                method: 'get',
            })
            .then(res => commit('SET_GENRE', res.data))
            .catch(err => console.error(err.response))
        },
        fetchSimilar({commit},movieId){
            axios({
                url: drf.movies.similar(movieId),
                method: 'get',
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