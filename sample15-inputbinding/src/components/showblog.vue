<template>
  <div v-theme="'narrow'">
    <h1>All Blogs..</h1>
     <input type="text" v-model="search" placeholder="search blogs"/>
     <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
     <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
     </div>
  </div>
</template>

<script>
import search from '../Mixins/searchmixins'
export default {

  data () {
    return {
      blogs:[],
      search:''
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
  computed:{
    
  },
  // Declaring Filters and Directives Locally
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color="#"+Math.random().toString().slice(2,8);
      }
    }
  },
  mixins:[search]

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
  background-color:rgb(253, 252, 252);
}
</style>
