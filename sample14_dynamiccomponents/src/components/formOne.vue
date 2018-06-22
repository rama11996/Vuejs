<template>
  <div>
    <formHelper>
     <div slot="form-header" >
       <h3>Form one Contact details </h3>
       <p> Enter the Contact details</p>
     </div>
     <div slot="form-fileds" >
       <input type="text" placeholder="name" required>
        <label> Your Message</label>
        <textarea></textarea>
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
      alert('thanks for Login in form 1');
    }
  }
}
</script>

<style lang="scss">

</style>
