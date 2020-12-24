<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성이름='상위컴포넌트 데이터이름'></app-header> -->
    <app-header 
    v-bind:propsdata='str'
    v-on:renew='renewStr'></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {

//이전에는 data:{ } 이렇게도 썼지만, .vue 에서는 function 으로해야됨 재사용성을위해
data:function(){
  return {
    str: 'Header'
  }
},
components : {
  'app-header': AppHeader
},
methods:{
  renewStr:function(){
    this.str='hi'
  }
}


}
</script>

<style>

</style>