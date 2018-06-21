<template>
  <div id="names">
    <ul>
      <li v-for="name in names" v-on:click="name.show =! name.show">
       <h2>{{ name.name }}</h2>
       <h3 v-show="name.show">{{ name.nickname }}</h3>

      </li>
    </ul>

  </div>
</template>

<script>
export default{
  props:{
    names:{
      type:Array,
      required:true
    }
  },
  data () {
    return {

    }
  },

}
</script>

<style >
#names{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0px 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  list-style-type: none;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #222;
}
</style>
