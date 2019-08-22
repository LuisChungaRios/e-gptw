<template lang="pug">
  <div class="">
    <!-- <MainSection/> -->
    <Practices/>
    <Hablando/>
    <Inspirando/>
    <Escuchando/>
    <Agradeciendo/>
    <Desarrollando/>
    <Balanceando/>
    <Celebrando/>
    <Reconociendo/>
  </div>
</template>

<script>

  import MainSection from './components/MainSection'
  import Practices from './components/Practices'
  import Inspirando from './components/Inspirando'
  import Hablando from './components/Hablando'
  import Escuchando from './components/Escuchando'
  import Agradeciendo from './components/Agradeciendo'
  import Desarrollando from './components/Desarrollando'
  import Balanceando from './components/Balanceando'
  import Celebrando from './components/Celebrando'
  import Reconociendo from './components/Reconociendo'

export default {
  name: 'app',
  components: {
    MainSection,
    Practices,
    Inspirando,
    Hablando,
    Escuchando,
    Agradeciendo,
    Desarrollando,
    Balanceando,
    Celebrando,
    Reconociendo
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
