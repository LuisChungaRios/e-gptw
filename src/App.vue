<template lang="pug">
  <div class="">
    <MainSection/>
    //- <Practices/>
    //- <Intermedio1/>
    //- <Hablando/>
    //- <Intermedio2/>
    //- <Inspirando/>
    //- <Intermedio3/>
    //- <Escuchando/>
    //- <Intermedio4/>
    //- <Agradeciendo/>
    //- <Intermedio5/>
    //- <Desarrollando/>
    //- <Intermedio6/>
    //- <Balanceando/>
    //- <Intermedio7/>
    //- <Celebrando/>
    //- <Intermedio8/>
    //- <Reconociendo/>
    //- <Final/>
    //- <Pie/>
    //- <abc/>
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
  // import abc from './components/abc'
  import Intermedio1 from './components/Intermedio1'
  import Intermedio2 from './components/Intermedio2'
  import Intermedio3 from './components/Intermedio3'
  import Intermedio4 from './components/Intermedio4'
  import Intermedio5 from './components/Intermedio5'  
  import Intermedio6 from './components/Intermedio6'
  import Intermedio7 from './components/Intermedio7'
  import Intermedio8 from './components/Intermedio8'
  import Final from './components/Final'
  import Pie from './components/Pie'

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
    Reconociendo,
    Intermedio1,
    Intermedio2,
    Intermedio3,
    Intermedio4,
    Intermedio5,
    Intermedio6,
    Intermedio7,
    Intermedio8,
    Final,
    Pie
    // abc
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
