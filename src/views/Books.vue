<template>
  <div>
    <v-row class="text-center">
     

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          This is our list of some Books!
        </h1>

        
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data,id) in Books"
        :key="id"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <Books :bookId="id" :bookTitle="data.title" :bookSubtitle="data.subtitle" :bookDescription="data.description" :bookSite="data.website" :bookImage="data.image"></Books>
        
      </v-col>
    </v-row>

    <h1></h1>

  </div>
</template>

<script>
import Books from '../components/Books.vue'
import Store from '../store'
export default {
  // name: 'Books',
  data(){
    return{
      card: Store.state.books,
      size: Store.state.books.length,
      titleview: Store.state.title
    }
  },
  computed:{
    Books(){
      return Store.state.books
    }
  },
  components: {
    Books,
  },
}
</script>