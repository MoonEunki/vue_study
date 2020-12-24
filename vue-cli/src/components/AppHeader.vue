<template>
<header>
  <h1>{{propsdata}}</h1>
  <button v-on:click='onclick'>send</button>  
</header>
</template>

<script>
export default {

  props:['propsdata'],
  methods:{
    onclick:function(){
      console.log('버튼클릭됨');
      this.$emit('renew')
    }
  }


}
</script>

<style>

</style>