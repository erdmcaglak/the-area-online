import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDown:false,
    pageRoute:''
  },
  mutations: {
    setIsDown(state,item){
      state.isDown = item;
    },
    setPageRoute(state,item){
      state.pageRoute = item;
    }
  },
  getters: {
    getIsDown(state){
      return state.isDown;
    },
    getPageRoute(state,item){
      return state.pageRoute;
    }
  },
})
