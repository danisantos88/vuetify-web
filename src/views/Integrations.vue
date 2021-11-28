<template>
  <v-container color="#fafafa">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/climate.gif')"
          class="my-3"
          contain
          height="20"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Would you like to consult the weather from anywhere in the world?
        </h1>
        <v-text-field
          label="Insert the city"
          placeholder="Type here"
        ></v-text-field>
        <v-btn rounded color="primary" dark> Click here! </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Integration",

  data: () => ({}),
};
</script>