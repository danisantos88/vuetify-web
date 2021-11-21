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
        v-system-bar
      </v-col>
    
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">F1rst Vuetify</v-list-item-title>
          <v-list-item-subtitle>My first vuetify webpage!</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="#f5f5f5"

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-col
        class="text-center"
        cols="11"
      >
        <v-icon>mdi-ufo</v-icon>
        <span>DBZ</span>
      </v-col>
        
      
    </v-app-bar>

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

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
    return{
      drawer: false,
      items: [
        { title: 'Account', icon: 'mdi-account'},
        { title: 'Aliens here', icon: 'mdi-alien'},
        { title: 'Cookies', icon: 'mdi-cookie'},
        { title: 'Infinity', icon: 'mdi-all-inclusive'},
        { title: 'Take a pic', icon: 'mdi-camera-outline'},
        { title: 'Config', icon: 'mdi-cog-outline'},
      ],
      right: null,
    }
  },
};
</script>
