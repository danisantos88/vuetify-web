<template>
  <div>
    <!-- Component Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">F1rst Vuetify</v-list-item-title>
          <v-list-item-subtitle>My first vuetify webpage!</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--  toolbar com os itens -->
    <v-app-bar app color="#f5f5f5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn v-for="item in items" :key="item.title" :to="item.to" link>
        <v-btn-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn-icon>
      </v-btn>
    </v-app-bar>

    
  </div>
</template>

<script>
export default {
  name: "Toolbar",

  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", to: '/home'},
        { title: "Books", icon: "mdi-book", to: '/books'},
        { title: "Coins", icon: "mdi-cash-multiple", to: '/coins'},
        { title: "Integrations", icon: "mdi-wrench", to: '/integrations'},
        { title: "Cookies", icon: "mdi-cookie", to: '/cookies'},
        { title: "About Us", icon: "mdi-all-inclusive", to: '/about'},
      ],
      right: null,
    };
  },
};
</script>