<template>
  <v-container color="#fafafa">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/happy.gif')"
          class="my-3"
          contain
          height="222"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          This was my first project in Vue.
        </h1>
        <br /><br />
        <h2>(and I'm feeling VERY HAPPY!!!)</h2>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "About",

  data: () => ({}),
};
</script>