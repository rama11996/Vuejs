new Vue({
  el:'#part1',
  data:{
    seen:false,
    todos: [
      { text: 'Welcome'  },
      { text:  'to' },
      { text: 'Kec' }
    ],
    message: 'Hello this is kec',
    error:false,
    success:false
  },
  methods:
  {
    reverseMessage:function(){
      this.message = this.message.split('').reverse().join('');
  }
  }
});
