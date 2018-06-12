Vue.component('greeting',{
  template:'<p> Hey its {{ name }} <button v-on:click="changeName">Click to change </button> </p>',
  data:function() {
    return{
      name:'Rama'
    }
  },
  methods:{
    changeName:function(){
      this.name= 'Logu';
    }
  }
});

new Vue({
  el:"#vue-one"
});
