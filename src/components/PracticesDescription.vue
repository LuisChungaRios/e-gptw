<template>
<div class="container-fluid vh-100 container_reclutando"  style="background-color: #42e8b4;">
  <div class="container h-100">
    <div class="row practices-description h-100">
      <div class="offset-1 col-4">
        <figure class="logo-cont-reclu">
          <img src="img/icon_3.png" alt="" class="logo-reclu">
        </figure>
        <h2 class="titulo-reclu">Reclutando
          <span class="titulo-sombra">Reclu<br>tando</span>
        </h2>
          <p class="text-blue">En <span class="decore-white">Entel</span>  buscamos que nuestro equipo se sienta parte de la solución
            desde el proceso de reclutamiento, mostrándole el <span class="decore-white">valor</span>  que tiene cada uno de ellos para
            lograr un objetivo en común. Esta es una primera impresión que se convierte en el <span class="decore-white">inicio del
              latido</span>  que emitimos para convertir a nuestros colaboradores en <span class="decore-white">Entel Lovers.</span>
          </p>
          <h4 class="frase">¡Empieza la transformación!</h4>
      </div>
      <div class="col-3">
        <figure class="persona-cont-reclu">
            <img src="img/nicole.png" class="img-nicol persona-reclu" alt="">
        </figure>        
      </div>
      <div class="col-lg-3 align-self-center">
        <div class="contenido-per">
          <p class="conoceme_mas_description"> “Yo entré como practicante, algo insegura, pero desde el primer día me hicieron sentir parte del equipo; me enamoré. <img src="img/popup/emoji8.png" alt="">
          A diferencia de otros lugares, aquí sí siento que puedo ser yo misma y que puedo ser como soy y sentirme aceptada”.
          </p>
            <h5 class="name">Nicole Marini (25)</h5>
            <p class="cargo">Ejecutiva Canal Elité <br>
              Área: Regional Consumidores <br>
              Lima - Comercial</p>
            <div class="boton text-right">
              <a class="btn-conoceme" href="#inline" data-lity><img src="img/btn-corazon.png" alt="" class="btn-img-corazon">¡Conóceme!</a>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 separar">

        <h2 class="bottom-text">Buenas <span>Prácticas</span></h2>
        <img src="img/reclutando_bottom.png" class="img-bottom"   alt="">

      </div>
    </div>
  </div>
</div>  
</template>

<script>
  import Navegador from './Navegador';
  import Popup from './Popup'
  export default {
    name: "PracticesDescription",
    components: {
      Navegador,
      Popup
    }
  }
</script>

<style lang="scss" scoped>
%fuenteLight {
  font-family: 'Barlow-Light';
  font-style: normal;
  font-weight: 200;
}
%fuenteRegular{
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
}
%fuenteMedium{
  font-family: 'Barlow-Medium';
  font-style: normal;
  font-weight: 500;
}
%fuenteMediumItalic{
  font-family: 'Barlow-MediumItalic';
  font-style: normal;
  font-weight: 500;
}
%fuenteSemiBold{
  font-family: 'Barlow-SemiBold';
  font-style: normal;
  font-weight: 600;
}
%fuenteBold {
  font-family: 'Barlow-Bold';
  font-style: normal;
  font-weight: 700;
}
@function convRem($x,$padre: 16px){
    $r: ($x/$padre) * 1rem;
    @return $r;
}

@function respxl($numero){
    $r: $numero - $numero*0.45;
    @return $r;
}
.logo-reclu{
  position: relative;
  z-index: 99;
}
.titulo-reclu{
  @extend %fuenteBold;
  font-size: convRem(57.47px) ;
  color: #2d2f8d;
  position: relative;
  z-index: 9;
  margin-top: 30px;
  margin-bottom: 105px;
}
.titulo-sombra{
  @extend %fuenteBold;
    font-size: 130.56px;
    color: #39d8a6;
    position: absolute;
    left: -5px;
    line-height: 120.56px;
    top: -90px;
    z-index: -9;
}
.container_reclutando{
    padding-top: 45px;
}
.persona-cont-reclu{
  position: absolute;
  bottom: 0px;
  left: -70%;
}
.conoceme_mas_description{
  @extend %fuenteMediumItalic;
  text-align: right;
  padding-left: 15px;
}
.name{
  @extend %fuenteBold;
  text-align: right;
  font-size: 27.77px;
  color: #f66f01; 
}
.cargo{
  @extend %fuenteBold;
  text-align: right;
  color: #37c7f0;
  line-height: 1.2;
}
.btn-img-corazon{
  font-size: 22.22px;
}
.contenido-per{
position: relative;
left: -30px;
}
.separar{
  top: -120px;
  .bottom-text{
    position: absolute;
    font-family: 'Barlow-Bold';
    font-style: normal;
    font-weight: 700;
    color: white;
    top: calc(50% - 26.8px);
    left: 10%;
    width: 80%;
    font-size: 36px;
    margin-bottom: 0;    
  }
}
.text-blue{
  @extend %fuenteLight;
  color: #2d2f8d;
  font-size: 16px;
  padding-right: 40.5px;
  margin-bottom: 45px;
}
.decore-white{
  @extend %fuenteBold;
}
.frase{
  @extend %fuenteMedium;
  color: #2d2f8d;
  font-size: 24px;
}
.btn-conoceme{
  @extend %fuenteMedium;
  // color: #005cff;
  // background: #fff;
  // text-decoration: none;
  // font-size: 20px;
  // padding: 5.5px 22.5px;
  // border-radius: 20px;
    background: white;
    border-radius: 10px;
    display: inline-block;
    text-decoration: none;
    padding: 5.5px 22.5px;
    padding-left: 40px;
    position: relative;
    color: #005cff;
    font-size: 20px;  
}
.btn-img-corazon{
    position: absolute;
    top: 0;
    left: -8.5px;
    width: 41px;
}

</style>