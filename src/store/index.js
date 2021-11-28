import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        cards:["Teste 1","Teste 2", "Teste3"],
        title:"My Cards"
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        bigTitle(state){
            return state.title.toUpperCase()
        }
    }
})