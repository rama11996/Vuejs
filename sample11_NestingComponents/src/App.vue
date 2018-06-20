<template>
  <div>
    <app-header></app-header>
    <app-names></app-names>
    <app-footer></app-footer>
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

    }
  }
}
</script>

<style >
</style>
