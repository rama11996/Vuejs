<template>
  <div>
    <footer>
      <h1>{{ copyright }}</h1>
    </footer>

  </div>
</template>

<script>
export default {
  data () {
    return {
      copyright:'Copyright 2018 Rama'
    }
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
