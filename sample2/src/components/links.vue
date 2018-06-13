<template>
  <div class="new">
    <h1> {{ newmsgs }} </h1>
    <ul>
      <li><a href="https://www.google.com">Google</a></li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'links',
    data (){
      return{
        newmsgs:'ITS NEW INCLUDED'
      }
    }
  }
</script>
