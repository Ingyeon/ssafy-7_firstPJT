<template>
  <div id="app">
    <!-- 이거 말고 진짜 nav-bar로 바꿔서 넣어줄거임
      <nav>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> 
    -->
    <MovieList/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar.vue'
  import MovieList from '@/components/MovieList.vue'

  export default {
    name: 'App',
    components: {
      // navbar
      MovieList
    }
  }
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
