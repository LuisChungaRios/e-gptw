<template>
  <div class="container-fluid" id="homeprincipal">
    <img src="img/background.png" alt="background" style="width: 100%;position: absolute;margin-left:-15px;" class="background_1">
    <img src="img/logo_01.png" alt="persona" style="width:41.67vw;position: absolute;top: 0;right: 0">
    <img src="img/_background-2.png" alt="background-2" style="width: 100%;position: absolute;z-index: -10;left:0;opacity:0.7;" class="background">
    <div class="container vh-100">
      <div class="row align-items-center row_logos">
        <div class="offset-1 col-3 offset-lg-2 col-lg-2 offset-xl-1 col-xl-3">
          <figure>
            <img src="img/logo_main.png" alt="" class="logo img-fluid">
          </figure>
        </div>
        <div class="offset-7 col-1 offset-xl-7 col-xl-1">
          <figure>
            <img src="img/logo_top_.png" alt="" class="logo-top-entel">
          </figure>
        </div>
      </div>
      <div class="row main2">
        <div class="col-2 col-xl-1">
            <!-- <Navegador/> -->
        </div>
        <div class="col-6 col-xl-6">
          <h2>La señal que</h2>
          <h1>Transforma</h1>
          <p class="descripcion">
            En <span class="decorate">Entel</span> creemos firmemente en el talento y capacidad de cada colaborador en hacer increíble lo que hace,
            pero esto se logra con algo más que con compromiso, se hace con <span class="decorate">amor</span>, y es este el que transmite a través de una señal,
            un latido que contagia este sentimiento a través de la Cultura Entel entre los mismos colaboradores,
            despertando en cada uno el amor por la marca, convirtiendonos así en:
          </p>
          <h3 class="decorate michi">#EntelLovers</h3>

          <div class="main-description_elovers" >
            <div class="" style="">
              <img src="img/avatar.png" alt="avatar" class="avatar1">
              <p>Colaborador <br> Entel <br>fidelizado</p>
            </div>
            <div class="sign-img">
              <img src="img/mas.png" alt="">
            </div>
            <div class="" >
              <img src="img/mensaje.png" alt="avatar" class="avatar2">
              <p>Un Mensaje: <br> Simple <br> Cercano <br> Confiable <br>Extraordinario</p>
            </div>
            <div class="sign-img">
              <img src="img/igual.png" alt="">
            </div>
            <div class="" style="">
              <img src="img/logo_entel_blanco.png" alt="avatar" class="avatar3">
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div class="container cont2">
      <div class="row align-items-center">
        <div class="col-3 offset-lg-1 col-lg-2 offset-xl-0 col-xl-3">
          <figure class="text-xl-center">
            <img src="img/logo_entel_blanco_2.png" alt="" class="img-fluid avatar4">
          </figure>
        </div>
        <div class="offset-1 col-7 offset-lg-1 col-lg-7 offset-xl-1 col-xl-7">
          <p class="des-final">Esta señal es un latido que transmite este sentimiento a través de la <span class="des-fina-bold">Cultura Entel</span> entre los mismos colaboradores, despertando en cada uno el amor por la marca, convirtiendonos así en:</p>
          <h3 class="decorate michi-final text-lg-center">
            <span class="primero">#</span>
            <span class="segundo">Entel</span>
            <span class="tercero">Lovers</span>
          </h3>
        </div>
        <div class="col-1 col-lg-1 col-xl-1">
          <figure class="fig-corazong">
            <img src="img/logo_main_3.png" alt="" class="corazong">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Navegador from './Navegador';

  export default  {
    components:{
      Navegador
    }
  }
</script>


<style lang="scss" scoped >
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

@function moverImagen($x){
  $r: $x/2;
  @return $r;
}


$c_sombra: #6adeff;
$font-size: 134.68px;
.row_logos{
    padding-top: 45px;
}
.cont2{
  padding-bottom: 115px;
  padding-top: 60px;
}
  .background{
    top: 25%;
  }
  .logo{
    // width: 25%;
    max-width: 100%;
  }
  h2{
    @extend %fuenteSemiBold;
    color: #ffffff;
    font-size: convRem(45.03px);
  }
  h1{
    @extend %fuenteBold;
    font-size: convRem(80.05px);
    color: #eb8ca5;
  }
  .descripcion{
    @extend %fuenteLight;
    font-size: convRem(16px);
    .decorate{
      @extend %fuenteBold;
    }
  }
  .michi{
    color: #eb8ca5;
    @extend %fuenteBold;
    font-size: convRem(30.02px);
  }
  .main-description_elovers{
    p{
      @extend %fuenteRegular;
      font-size: convRem(14px);
    }
  }
  .des-final{
    @extend %fuenteLight;
    font-size: convRem(21.75px);
    color: #2d2f8d;
    text-align: center;
    padding: 0 22.5px;
  }
  .des-fina-bold{
    @extend %fuenteSemiBold;
    font-size: convRem(21.75px);
    color: #ff6c03;    
  }
  .primero{
    @extend %fuenteBold;
    color: #0066c5;
    font-size: convRem(72.65px);
  }
  .segundo{
    @extend %fuenteMediumItalic;
    color: #ff6c03;
    font-size: convRem(70.45px);

  }
  .tercero{
    @extend %fuenteLight;
    color: #0066c5;
    font-size: convRem(70.45px);
  }
  .corazong{
    width: 569px;
    margin-left: moverImagen(-569px);
  }

  #homeprincipal{
    position: relative;
  }
  .main2{
    padding-bottom: 30px;
  }
@media(max-width: 1919px){
  @function reducirimgxl1($x){
    $r: $x - ($x*0.2);
    @return $r;
  }
  $cz1: 569px;
  .corazong{
    width: reducirimgxl1($cz1);
    margin-left: moverImagen(-reducirimgxl1($cz1));
  }
}
  @function reducirimgxl2($x){
    $r: $x - ($x*0.4);
    @return $r;
  }

@media(min-width: 1200px) and (max-width: 1366px){
    @function reducirFuentexl($x){
      $r: $x - ($x*0.2);
      @return $r;
    }
  .cont2{
    padding-bottom: reducirFuentexl(115px);
    padding-top: reducirFuentexl(60px);
  }
  h2{
    font-size: convRem(reducirFuentexl(45.03px));
    line-height: convRem(reducirFuentexl(45.03px));
  }
  h1{
    font-size: convRem(reducirFuentexl(80.05px));
    line-height: convRem(reducirFuentexl(80.05px));
  }
  .descripcion{
    font-size: convRem(reducirFuentexl(16px));
  }
  .michi{
    font-size: convRem(reducirFuentexl(30.02px));
  }
  .main-description_elovers{
    p{
      font-size: convRem(reducirFuentexl(14px));
    }
  }
  .des-final{
    font-size: convRem(reducirFuentexl(21.75px));
    padding: 0 22.5px;
  }
  .des-fina-bold{
    font-size: convRem(reducirFuentexl(21.75px));
  }
  .primero{
    font-size: convRem(reducirFuentexl(72.65px));
  }
  .segundo{
    font-size: convRem(reducirFuentexl(70.45px));

  }
  .tercero{
    font-size: convRem(reducirFuentexl(70.45px));
  }
  .corazong{
    width: reducirimgxl2(569px);
    margin-left: moverImagen(-reducirimgxl2(569px));
  }
  // .main2{
  //   padding-top: 45px;
  //   padding-bottom: 30px;
  // }  
  .logo{
    // width: 17.5% !important;
    width: 50%;
    max-width: reducirimgxl2(200px);
  }
  .avatar1{
    max-width: reducirimgxl2(42px);
  }
  .avatar2{
    max-width: reducirimgxl2(53px);
  }
  .avatar3{
    max-width: reducirimgxl2(144px);
  }
  .avatar4{
    max-width: reducirimgxl2(238px);
  }
  .main2{
    padding-top: convRem(reducirFuentexl(45px));
    padding-bottom: convRem(reducirFuentexl(30px));
  }

}

@function reducirimgxl3($x){
  $r: $x - ($x*0.7);
  @return $r;
}
@media(min-width: 992px) and (max-width: 1199px){
    @function reducirFuentexl($x){
      $r: $x - ($x*0.2);
      @return $r;
    }
    .background_1{
      height: 90vh;
    }
  .cont2{
    padding-bottom: reducirFuentexl(115px);
    padding-top: reducirFuentexl(60px);
  }
  h2{
    font-size: convRem(reducirFuentexl(45.03px));
    line-height: convRem(reducirFuentexl(45.03px));
  }
  h1{
    font-size: convRem(reducirFuentexl(80.05px));
    line-height: convRem(reducirFuentexl(80.05px));
  }
  .descripcion{
    font-size: convRem(reducirFuentexl(16px));
    padding-right: 90px;
  }
  .michi{
    font-size: convRem(reducirFuentexl(30.02px));
  }
  .main-description_elovers{
    p{
      font-size: convRem(reducirFuentexl(14px));
    }
  }
  .des-final{
    font-size: convRem(reducirFuentexl(21.75px));
    padding: 0 22.5px;
  }
  .des-fina-bold{
    font-size: convRem(reducirFuentexl(21.75px));
  }
  .primero{
    font-size: convRem(reducirFuentexl(72.65px));
  }
  .segundo{
    font-size: convRem(reducirFuentexl(70.45px));

  }
  .tercero{
    font-size: convRem(reducirFuentexl(70.45px));
  }
  .corazong{
    width: reducirimgxl3(569px);
    margin-left: moverImagen(-reducirimgxl3(569px));
  }
  .logo{
    // width: 17.5% !important;
    // max-width: reducirimgxl2(200px);
    max-width: 100%;
  }
  .avatar1{
    max-width: reducirimgxl2(42px);
  }
  .avatar2{
    max-width: reducirimgxl2(53px);
  }
  .avatar3{
    max-width: reducirimgxl2(144px);
  }
  .avatar4{
    max-width: reducirimgxl2(238px);
  }
  .main2{
    // padding-top: convRem(reducirFuentexl(45px));
    padding-bottom: convRem(reducirFuentexl(30px));
  }
  .background{
    top: 40%;
  }  
}
</style>

