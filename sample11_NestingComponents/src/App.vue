<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <names :names="names"></names>
    <app-footer v-bind:title="title" ></app-footer>
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
    'names':Names
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
      ],
      title:"Rama Friends Lists",
    }
  },
  methods:{
  updateTitle:function(updateTitle) {
    this.title=updateTitle;
  }
}
}
</script>

<style >
</style>
