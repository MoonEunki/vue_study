<template>
<!-- button에  v-on:click 해도되는데, type='submit'이 form으로 submit 이벤트를보내서 이렇게함 -->
  <form v-on:submit.prevent='submitForm'>
    <div>
      <label for="username">ID: </label>
      <input id='username' type="text" v-model="username">
    </div>
        <div>
      <label for="password">PW: </label>
      <input id='password' type="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {

  data : function(){
    return  {
      username:'',
      password:''
    }
  },
  methods:{
    submitForm:function(){
      // event.preventDefault(); //바닐라js에서 submit 새로고침막는거
      // vue에서는  v-on:submit.prevent 으로 할수있음 
      const url ='https://jsonplaceholder.typicode.com/users'
      const data = {
        username :this.username,
        password : this.password
      }
      axios.post(url,data)
      .then(function(res){
        console.log(res)
      })
      .catch(function(err){
        console.log(err)
      })
    //  console.log(this.username); 
    //  console.log(this.password); 
    }
  }
}
</script>

<style>

</style>