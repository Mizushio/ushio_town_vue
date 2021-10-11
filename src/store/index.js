import { createStore } from 'vuex'

export default createStore({
  //全局变量，好耶
  state: {
    username:"",
    page:"1",
  },
  //set方法
  mutations: {
    setusername(state,username){
      state.username = username;
  },
    setuserpage(state,page){
    state.page = page;
},

  },
  // get方法
  getters:{
    getusername: state => state.username,
    getuserpage: state => state.page,

  },

/**
 * 举个🌰
 * this.$store.commit('setusername', value);    
 * this.$store.getters. getusername
 */



  actions: {

  },
  modules: {
  }
})
