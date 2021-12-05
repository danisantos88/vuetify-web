<template>
  <div>
    <v-row class="text-center">
        <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{thistitle}}
        </h1>      
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data,id) in events"
        :key="id"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <Cards :cardid="id" :cardCode="data.code" :cardDescription="data.description" :cardImage="data.image" :cardRate="data.rate" :cardSymbol="data.symbol" :cardFloat="data.rate_float"></Cards>
        
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Cards from '../components/Cards'
import Store from '../store'
export default {
  name: 
    'Coins',
    data(){
        return{
        card: Store.state.cards,
        size: Store.state.cards.length,
        titleview: Store.state.title,
        }
  },
  computed:{
    Cards(){
      return Store.state.cards
    },
    thistitle(){
      return Store.getters.bigTitle
    },
    events(){
      return Store.state.events
    }
  },
  components: {
    Cards,
  },
  async created(){
    Store.dispatch("fetchEvents") 
  }
}
</script>