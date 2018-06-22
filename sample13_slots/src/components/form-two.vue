<template>
  <div>
        <div slot="form-header">
          <h3>Title of the form</h3>
          <p>Info about the form</p>
        </div>
        <div slot="form-fileds">
          <input type="text" name="name" placeholder="name" required>
          <input type="password" name="password" placeholder="password" required>
        </div>
        <div slot="form-controls">
          <button v-on:click='handleSubmit'>Submit</button>
        </div>

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
    handleSubmit:function () {
      alert('you clicked Submit')
    }
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
