<template lang="pug">
  <div class="">
    <MainSection/>
  </div>
</template>

<script>

  import MainSection from './components/MainSection'

export default {
  name: 'app',
  components: {
    MainSection
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
