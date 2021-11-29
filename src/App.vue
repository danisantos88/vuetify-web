<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
<v-app>
    <v-system-bar
      app
      height="30"
      color="#e0e0e0"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        f1rst vuetify
      </v-col>
    
    </v-system-bar>

    <v-content
      color="#fafafa"
    >
      <Toolbar/>
    </v-content>

    <v-main>
      <router-view/>
    </v-main>
<v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
     
    <v-bottom-navigation v-model="value">
      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer 
      padless
      color="#f4f4f4"

      >
      <v-col
        class="text-right"
        cols="12"
      >
        Daniele dos Santos Rosa RA 111706
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import Toolbar from './components/Toolbar';


export default {
  name: 'App',

  components: {

    Toolbar,

  },

  data () {
    return{
  
    }
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
