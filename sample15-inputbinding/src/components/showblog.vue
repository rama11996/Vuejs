<template>
  <div v-theme:column="'narrow'">
    <h1>All Blogs..</h1>
     <div v-for="blog in blogs" class="single-blog">
     <h2 v-rainbow>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
     </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      blogs:[]
    }
  },
  methods:{

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs=data.body.slice(0,10);
    })
  },
}
</script>

<style lang="scss">
 #showblog{
   max-width: 800px;
   margin: 0 70px ;
 }
.single-blog{
  padding:20px;
  box-sizing:border-box;
  margin:20px 20px ;
  background-color:#eee;
}
</style>
