<template>
  <div class="row practices-description" style="margin: 0">
    <div class="col-2">
      <Navegador/>
    </div>
    <div class="col-10 img-responsive" >
      <div class="practices-description__content">
        <img src="img/icon_3.png" alt="">
        <h1 class="text-blue title">Reclutando</h1>
        <p class="text-blue">En <span class="decore-white">Entel</span>  buscamos que nuestro equipo se sientan parte de la solución
          desde el proceso de reclutamiento, mostrandoles el <span class="decore-white">valor</span>  que tienen cada uno de ellos para
          lograr un objetivo en común. Esta es una primera impresión que se convierte en el <span class="decore-white">inicio del
            latido</span>  que emitimos para convertir a nuesros colaboradores en <span class="decore-white">Entel Lovers.</span> </p>
        <h4 class="text-blue frase">¡Empieza la transformación!</h4>
      </div>
      <div class="conoceme_mas">

        <p class="conoceme_mas_description"> “Yo entré como practicante, algo insegura, pero desde el primer día me hicieron sentir parte del equipo; me enamoré.
          A diferencia de otros lugares, aquí sí siento que puedo ser yo misma y que puedo ser como soy y sentirme aceptada”.
        </p>
        <h5 class="name">Nicole Marini (25)</h5>
        <p class="cargo">Ejecutiva Canal Elité <br>
          Área: Regional Consumidores <br>
          Lima - Comercia</p>
        <button class="btn-conoceme" style="display: none"><img src="img/btn-corazon.png" alt="" class="btn-img-corazon">¡Conóceme!</button>
      </div>
      <img src="img/nicole.png" class="img-nicol" alt="">
    </div>
    <div class="col-2"></div>
    <div class="col-10 img-2" >
      <h2 class="bottom-text">Buenas practicas</h2>
      <img src="img/reclutando_bottom.png" class="img-bottom"   alt="">
    </div>

  </div>
</template>

<script>
  import Navegador from './Navegador';
  export default {
    name: "PracticesDescription",
    components: {
      Navegador
    }
  }
</script>

<style scoped>
  .img-responsive {
    display: flex;
    justify-content: center;
    align-items: end;
    margin-bottom: -100px;
  }
  .img-nicol {
  margin-top: 100px;
  width: 55%;
  }
  .img-2 {
    margin-bottom: -40px;
    width: 50%;
  }
  .bottom-text {

    position: absolute;
    left: 10%;
    bottom: 40%;
  }
  .practices-description__content {
    position: absolute;
    width: 350px;
    left: 0;
    top: 10%;
  }
  .conoceme_mas {
    text-align: right;
    position: absolute;
    width: 200px;
    right: 27%;
    top: 30%;
  }

  .conoceme_mas p {
    font-size: 13px;
    font-weight: bold;
  }
  .text-blue{
    color:#2d2f8d;
  }

  .decore-white{
    font-weight: bold;
  }
  .name{
    font-weight: bold;
    color:#ff8334;
    text-align: right;
  }
  .cargo{
    font-weight: bold;
    color:#2AD2F7;
  }
  .btn-conoceme{
    font-size:20px;
    height: 40px;
    width: 200px;
    font-weight: bold;
    color:#222473;
    border-radius: 50px;
    border: none;
    background-color: white;
    position: relative;
    text-align: left;
    padding: 0;
  }
  .btn-img-corazon{
    height: 40px;
    margin-left: -5px;
    margin-right: 10px;
  }
  .title, .frase{
    font-weight: bold;
  }

  @media screen and (min-width: 992px) {
    .conoceme_mas p {
      font-size: 10px;
    }
    .conoceme_mas {

      width: 150px;
      right: 25%;
      top: 32%;
    }
    .practices-description__content {

      width: 300px;
      left: 0;
      top: 5%;
      font-size: 13px;
    }
    .img-bottom {
      width: 70%;
    }
    .img-2 {
      margin-bottom: -30px;
      width: 50%;
    }
    .bottom-text {


      font-size: 25px;
      bottom: 30%;

    }
    .img-responsive {
      margin-bottom: -50px;
    }

  }



  @media screen and (min-width: 1150px) {
    .conoceme_mas p {
      font-size: 12px;
    }
    .conoceme_mas {

      width: 170px;
      right: 26%;
      top: 32%;
    }
    .practices-description__content {

      width: 350px;
      left: 0;
      top: 5%;
      font-size: 15px;
    }
    .img-bottom {
      width: 70%;
    }
    .img-2 {
      margin-bottom: -30px;
      width: 50%;
    }
    .bottom-text {


      font-size: 25px;
      bottom: 30%;

    }
    .img-responsive {
      margin-bottom: -50px;
    }

  }

  @media screen and (min-width: 1280px) {
    .conoceme_mas p {
      font-size: 13px;
    }
    .conoceme_mas {

      width: 220px;
      right: 25%;
      top: 32%;
    }
    .practices-description__content {

      width: 400px;
      left: 0;
      top: 5%;
      font-size: 16px;
    }
    .img-bottom {
      width: 70%;
    }
    .img-2 {
      margin-bottom: -30px;
      width: 50%;
    }
    .bottom-text {


      font-size: 25px;
      bottom: 30%;

    }
    .img-responsive {
      margin-bottom: -60px;
    }

  }

  @media screen and (min-width: 1400px) {
    .conoceme_mas p {
      font-size: 15px;
    }
    .conoceme_mas {

      width: 220px;
      right: 26%;
      top: 32%;
    }
    .practices-description__content {

      width: 430px;
      left: 0;
      top: 5%;
      font-size: 18px;
    }
    .img-bottom {
      width: 70%;
    }
    .img-2 {
      margin-bottom: -35px;
      width: 50%;
    }
    .bottom-text {


      font-size: 25px;
      bottom: 30%;

    }
    .img-responsive {
      margin-bottom: -60px;
    }

  }
  @media screen and (min-width: 1500px) {
    .conoceme_mas p {
      font-size: 16px;
    }
    .conoceme_mas {

      width: 250px;
      right: 25%;
      top: 30%;
    }
    .practices-description__content {

      width: 450px;
      left: 0;
      top: 5%;
      font-size: 20px;
    }
    .img-bottom {
      width: 70%;
    }
    .img-2 {
      margin-bottom: -40px;
      width: 50%;
    }
    .bottom-text {


      font-size: 30px;
      bottom: 30%;

    }
    .img-responsive {
      margin-bottom: -70px;
    }

  }
  
</style>