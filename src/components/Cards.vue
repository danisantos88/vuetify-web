<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    {{Cards}}
    <v-img
      src="../assets/coin.gif"
      height="200px"
    ></v-img>

    <v-card-title>
      {{cardCode}}
    </v-card-title>

    <v-card-subtitle>
      {{cardDescription}}
    </v-card-subtitle>

    <v-card-text>
      {{cardRate}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        View More...
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
        Float Rate: {{cardFloat}} 
        <v-divider></v-divider>
        Symbol: {{cardSymbol}}
      </div>
    </v-expand-transition>
  </v-card>
  
</template>

<script>
  export default {
    props:['cardid', 'cardCode', 'cardSymbol', 'cardDescription', 'cardRate', 'cardFloat'],
    data: () => ({
      show: false,
    }),
  }
</script>