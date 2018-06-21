<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title:'My Friends List'
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
