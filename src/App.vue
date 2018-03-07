<template>
  <div id="app">
    <img src="./assets/mybank.png">
    <MyBank></MyBank>
    
  </div>
</template>

<script>
import MyBank from './components/MyBank.vue'
import DogTable from './components/Dogtable.vue'



export default {
  name: 'app',
  components: {
    MyBank,
    DogTable,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
}
</style>
