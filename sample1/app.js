new Vue({
  el:'#vue-app',
  data:{
    name:'Rama',
    place: 'Perundurai',
    website: 'www.google.com',
    age: 25,
    name1:'',
    age1:''
  },
  methods:{
    greetings:function(college) {
      return 'Welocme to '+ college +' Engineering College '+  this.name;
    },
    add:function(inc){
      this.age +=inc ;
    },
    subtract:function(dec){
        this.age -=dec;
      },
      click:function(){
        alert('you clicked');
      },
     logName:function() {
       alert("you entered name");
     },
     logAge:function() {
       console.log("you entered age");
     }

  },
});
