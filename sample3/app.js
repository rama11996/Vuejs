new Vue({
  el:'#part1',
  data:{
    age: 20,
    a: 0,
    b: 0
  },
 methods:{
  /* addtoA:function(){
     console.log('addtoA');
     return this.a+this.age;
   },
   addtoB:function(){
     console.log('addtoB');
     return this.b+this.age;
   },*/
},
 computed:{
   addtoA:function(){
     console.log('addtoA');
     return this.a+this.age;
   },
   addtoB:function(){
     console.log('addtoB');
     return this.b+this.age;
   }
 }
});
