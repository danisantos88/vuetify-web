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

    <!--  toolbar com os itens -->
    <v-app-bar app color="#f5f5f5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn v-for="item in items" :key="item.title" link>
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
        { title: "Home", icon: "mdi-home" },
        { title: "Account", icon: "mdi-account" },
        { title: "Integration", icon: "mdi-wrench" },//white-balance-sunny" }, 
        { title: "About Us", icon: "mdi-all-inclusive" },
        { title: "Cookies", icon: "mdi-cookie" },
      ],
      right: null,
    };
  },
};
</script>