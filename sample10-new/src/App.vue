<template>
  <div>
    <h1>{{ title }}</h1>
    <names></names>
  </div>
</template>

<script>
import names from './names.vue'

export default {
  components:{
    'names':names
  },
  data () {
    return {
      title:"Names List"
    }
   }
}
</script>

<style scoped>
h1{
  color: green;
}
</style>
