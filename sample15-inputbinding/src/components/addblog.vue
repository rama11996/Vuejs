<template>
  <div id='add-blog'>
    <h2>Add a new Blog post</h2>
    <form>
      <label>Blog Title</label>
      <input type="text" v-model.lazy='blog.title' required>
      <label>Blog Content</label>
      <textarea v-model.lazy='blog.content'></textarea>
      <div id="checkboxes">
        <label>Playing</label>
        <input type="checkbox" value="Playing" v-model="blog.categories">
        <label>Roaming</label>
        <input type="checkbox" value="Roaming" v-model="blog.categories">
        <label>Fanning</label>
        <input type="checkbox" value="Fanning" v-model="blog.categories">
        <label>Reading</label>
        <input type="checkbox" value="Reading" v-model="blog.categories">
      </div>
      <p>Blog Degrees</p>
      <select v-model="blog.degree">
        <option v-for="degree in degrees">{{ degree }}</option>
      </select>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:  {{ blog.title }}</p>
      <p>Blog Content: {{ blog.content }}</p>
      <p>{{ blog.content }}</p>
      <p> Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Degrees: {{ blog.degree }}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      blog:{
        title:'',
        content:'',
        categories:[],
        degree:""
    },
    degrees:['BE','B.Tech','B.A','B.Sc']
    }
  }
}
</script>

<style lang="scss">
h3{
  margin-top: 10px;
}
#add-blog*{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],textarea{
  display:block;
  margin: 8px;
  width:100%;
}
#preview{
  padding: 10px 20px;
  border:1px solid #ddd;
  margin: 30px 0;
}
#checkboxes label{
  display:inline-block;

}
#checkboxes input{
  display: inline-block;
  margin-right:10px;
}

</style>
