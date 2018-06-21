<template>
  <div>
    <header></header>
    <names></names>
    <p>
      <span v-for="n in names">{{ n.name }}</span>
    </p>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Names from './components/Names.vue';

export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-names':Names
  },
  data () {
    return {
      names: [
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false},
        {name:'Ramanathan',nickname:'Rama',show:false}
      ]
    }
  },
  mounted () {
    console.log(this.names);
  }
}
</script>

<style >
</style>
