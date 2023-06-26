<template>
  <div id="app">
    <div>这是APP组件</div>
     <Topbar/>
     <Header/>
     <Footer/>
  </div>
</template>

<script>

import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {jinpinApi} from '@/request/api.js'
export default {
  name: 'App',
  components:{
    Topbar,Header,Footer,
  },
  created(){
    jinpinApi().then(res=>{
      console.log(res.data);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.topbar {
  height: 50px;
  background-color: #888;
}
</style>
