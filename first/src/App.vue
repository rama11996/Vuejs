<template>
  <div id="app">
    <div class="header">
      <div class="links">
      <ul>
        <li><a v-on:click="click" href="https://www.google.com/">Google</a></li>
        <li><a v-on:click="click" href="https://www.google.com/">Google</a></li>
        <li><a v-on:click="click" href="https://www.google.com/">Google</a></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.header{
  display: flex;
  flex-direction: row;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
.links{
  width: 110em;
}

li {
    float: left;
}
</style>
