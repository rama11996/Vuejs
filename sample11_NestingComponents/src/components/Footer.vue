<template>
  <div>
    <footer>
      <h1>{{ copyright }} {{ title }}</h1>
    </footer>

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
      copyright:'Copyright 2018'
    }
  },
  created(){
    bus.$on('titleChanged',(data)=>{
      this.title=data;
    })
  }
}
</script>

<style scoped>
h1{
  color: #222;
  padding: 0px;
}
footer{
  background-color: green;
  text-align: center;
}

</style>
