<template>
  <div>
    <formHelper>
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
    </formHelper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'


export default {
  components:{
    'formHelper':formHelper
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

</style>
