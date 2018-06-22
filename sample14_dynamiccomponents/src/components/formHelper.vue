<template>
  <div>
    <h1>Fill these forms...</h1>
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fileds"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="usefull-links">
        <ul>
          <li><a href="#">Link 1 </a></li>
          <li><a href="#">Link 2 </a></li>
          <li><a href="#">Link 3 </a></li>
          <li><a href="#">Link 4 </a></li>
          <li><a href="#">Link 5 </a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components:{

  },
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
h1{
  text-align: center;
}
form{
  width: 100%;
  max-width: 900px;
}
#usefull-links ul{
  padding: 0px;
}
#usefull-links li{
  display: inline-block;
  margin-right: 10px;
}
form > div{
  background-color: #eee;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  margin-left: 200px;
}
#form-header{
  background-color: #ddd;
  border: 1px solid #bbb;
}
</style>
