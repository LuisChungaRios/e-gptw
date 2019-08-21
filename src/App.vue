<template lang="pug">
  <div class="">
    <!-- <MainSection/> -->
    <Practices/>
    <Inspirando/>
  </div>
</template>

<script>

  import MainSection from './components/MainSection'
  import Practices from './components/Practices'
  import Inspirando from './components/Inspirando'

export default {
  name: 'app',
  components: {
    MainSection,
    Practices,
    Inspirando
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
