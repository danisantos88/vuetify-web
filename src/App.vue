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
    

    <v-content
      color="#fafafa"
    >
      <HelloWorld/>
    </v-content>
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
import HelloWorld from './components/HelloWorld';
import Toolbar from './components/Toolbar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Toolbar,
  },

  data () {
    return{
      // drawer: false,
      // items: [
      //   { title: 'Account', icon: 'mdi-account'},
      //   { title: 'Aliens here', icon: 'mdi-alien'},
      //   { title: 'Cookies', icon: 'mdi-cookie'},
      //   { title: 'Infinity', icon: 'mdi-all-inclusive'},
      //   { title: 'Take a pic', icon: 'mdi-camera-outline'},
      //   { title: 'Config', icon: 'mdi-cog-outline'},
      // ],
      // right: null,
    }
  },
};
</script>
