import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import movies from './modules/movies'
import community from './modules/community'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // 다음과 같이 특정 모듈만 저장되게도 가능합니다. 오류 발생시 참고
  // plugins: [createPersistedState(
  //   {paths: ['모듈명']}
  // )],
  modules: { accounts, movies, community }, 
})

