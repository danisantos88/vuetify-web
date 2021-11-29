<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    {{Books}}
    <v-img
      src="../assets/book.jpg"
      height="400px"
    ></v-img>

    <v-card-title>
      {{bookTitle}}
    </v-card-title>

    <v-card-subtitle>
      {{bookSubtitle}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        View more...
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        {{bookDescription}}
      </div>
    </v-expand-transition>
  </v-card>
  
</template>

<script>
  export default {
    name: 'Books',
    props:['bookId', 'bookTitle', 'bookSubtitle', 'bookDescription', 'bookSite'],
    data: () => ({
      show: false,
    }),
  }
</script>