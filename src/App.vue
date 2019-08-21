<template lang="pug">
  <div class="">
    <!-- <MainSection/> -->
    <Practices/>
    <Hablando/>
    <Inspirando/>
  </div>
</template>

<script>

  import MainSection from './components/MainSection'
  import Practices from './components/Practices'
  import Inspirando from './components/Inspirando'
  import Hablando from './components/Hablando'

export default {
  name: 'app',
  components: {
    MainSection,
    Practices,
    Inspirando,
    Hablando
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
