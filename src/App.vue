<template>

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
    

    <div>      <router-view></router-view></div>
    <v-footer 
      padless
      color="#f4f4f4"

      >
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>v-footer</strong>
      </v-col>
    </v-footer>
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
