<template>
  <div>
    <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
  </div>
</template>

<script>
import {bus} from '../main';
export default {
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      title:'Rama Friends List'
    }
  },
  methods:{
    changeTitle:function () {
      //this.$emit('changeTitle','My Rocksters');
    //  this.title='My Rocksters';
      bus.$emit('titleChanged','My Rocksters');
    }
  }
}
</script>

<style scoped>
h1{
  color:green;
  padding: 10px;
}
header{
  background-color: #222;
  text-align: center;
}
</style>
