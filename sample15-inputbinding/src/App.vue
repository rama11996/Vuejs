<template>
  <div>
    <showblog></showblog>
  </div>
</template>

<script>
import addBlog from './components/addblog.vue'
import showblog from './components/showblog.vue'
export default {
  components:{
    'addblog':addBlog,
    'showblog':showblog
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
