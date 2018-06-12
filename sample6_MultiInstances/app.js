var one=new Vue({
  el:'#vue-one',
  data:{
    title: 'Hello this is First one'
  },
  methods:{

  },
  computed:{
    greet:function(){
      return 'this is from app first app';
  }
}
});

var two=new Vue({
  el:'#vue-two',
  data:{
    title: 'Hello this is Second one'
  },
  methods:{
    titleChange:function(){
      one.title='Title Changed';
    }
  },
  computed:{
    greet:function(){
      return 'this is from app second app';
    }
  }
});
two.title='Changed from outside';
