<template>
  <div>
    <h1>The Names are...</h1>
    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      names:['Rama','Sathish','Monu']
    }
  }
}
</script>

<style scoped>
h1{
  color: yellow;
}
</style>
