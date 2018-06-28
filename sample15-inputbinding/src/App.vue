<template>
  <div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import addBlog from './components/addblog.vue'
import showblog from './components/showblog.vue'
import listblogs from './components/listBlogs.vue'


export default {
  components:{
    'addblog':addBlog,
    'showblog':showblog,
    'listblog':listblogs
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
