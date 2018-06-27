<template>
  <div>
    
    <showblog></showblog>
  </div>
</template>

<script>
import addBlog from './components/addblog.vue'
import showblog from './components/showblog.vue'
import filter from './components/filter.vue'


export default {
  components:{
    'addblog':addBlog,
    'showblog':showblog,
    'filter':filter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
