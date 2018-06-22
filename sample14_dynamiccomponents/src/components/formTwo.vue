<template>
  <div>
    <formHelper>
     <div slot="form-header" >
       <h3>Form Two Login </h3>
       <p> Enter the login details</p>
     </div>
     <div slot="form-fileds" >
       <input type="text" placeholder="name" required>
       <input type="password" placeholder="password" required>
     </div>
     <div slot="form-controls" >
       <button v-on:click="handleButton" > Submit</button>
     </div>
    </formHelper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
  components:{
    'formHelper':formHelper
  },
  data () {
    return {

    }
  },
  methods:{
    handleButton:function(){
      alert('thans for Login in form 2');
    }
  }
}
</script>

<style lang="scss">

</style>
