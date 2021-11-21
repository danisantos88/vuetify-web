<template>
  <v-container
    color="#fafafa"
  >
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo2.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          This is my F1rst Vuetify WebPage!
        </h1>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>
