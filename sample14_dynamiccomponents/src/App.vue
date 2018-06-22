<template>
  <div>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component='formOne'">Show Form Form 1</button>
    <button v-on:click="component='formTwo'">Show Form Form 2</button>

  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components:{
    'formOne':formOne,
    'formTwo':formTwo
  },
  data () {
    return {
      component:'formTwo'
    }
  }
}
</script>

<style lang="scss">

</style>
