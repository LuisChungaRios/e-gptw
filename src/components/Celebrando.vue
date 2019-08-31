<template>
<div>
    <div id="celebrando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-xl-1 col-xl-4 offset-lg-2 col-lg-4">
                    <div class="logo">
                        <img src="img/celebrando/logo.png" alt="">
                        <h3 class="titulop">Celebrando<span class="titulo_sombra">Cele<br>brando</span></h3>
                    </div>
                    <div class="principal">
                        <p>En Entel, <b>si lo haces increíble</b> hay que celebrarlo. Sin jerarquías ni temas funcionales, el trabajo de cada colaborador habla por sí mismo, y éste a su vez comparte su conocimiento para transmitir ese sentimiento de dar lo mejor cada día.</p>
                        <span class="camb">¡Nos transformamos!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-xl-1 col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/celebrando/persona.png" alt="">
                </div>
                <div class="col-xl-5 col-lg-4 floro">
                    <img src="img/celebrando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Lo que más me gusta de las<br>
                            celebraciones es que todas las<br>
                            áreas compartimos más, nos<br>
                            conocemos más, y yo puedo<br>
                            participar de las actividades.<br>
                            Por eso en el Entel Fest de<br>
                            agosto voy a participar bailando<br>
                            <img src="img/celebrando/emoji.png"/> ”. </p>
                        <h5 class="text-right">Nicole Marini<br>(25)</h5>
                        <p class="text-right puesto">
                            Ejecutiva Canal Elité<br>
                            Área: Regional<br>
                            Consumidores<br>
                            Lima - Comercial </p>
                        <div class="conocer text-right">
                            <a href="#inline" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="celebrando-des">
        <div class="container" style="height: 0px;">
            <div class="row mi-fila">
                <div class="offset-lg-2 col-lg-8 separar offset-xl-1 col-xl-10">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <CelebrandoDescription/>
    </div>
    <!-- <Popup/> -->
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  CelebrandoDescription from './CelebrandoDescription'
 import Popup from './Popup'
export default {
    name: "Celebrando",
    components: {
        Navegador,
      CelebrandoDescription,
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
$c_sombra: #2d2f8d;
$font-size: 120.68px;

@function convRem($x,$padre: 16px){
    $r: ($x/$padre) * 1rem;
    @return $r;
}
@function respxl($numero){
    $r: $numero - $numero*0.45;
    @return $r;
}
.titulop{
    position: relative;
    margin-bottom: 0;
    margin-top: convRem(60px);
    margin-bottom: convRem(75px);
}
.titulo_sombra{
    @extend %fuenteBold;
    color: $c_sombra;
    font-size: convRem($font-size);
    position: absolute;
    left: convRem(0px);
    top: convRem(-60px);
    line-height: convRem(87.5px);
    z-index: -9;
    opacity: .2;
}
/*
    line-height: 87.5px;
    top: -60px;
*/
@media(max-width: 1366px){
    .titulop{
        margin-top: convRem(respxl(60px));
        margin-bottom: convRem(respxl(75px));
    }
    .titulo_sombra{
    font-size: 4.148375rem;
    top: -25px;
    line-height: 3.3rem;
    } 
    #celebrando-des .titulo{
        font-size: 28px;
    }

}
@media(max-width: 1199px){
#celebrando .imagen-c{
    left: calc(59.5% - 165.83px);
}
#celebrando .imagen-c img{
        width: 319.66px;
}
#celebrando .floro .fondo{
        left: 0%;
        top: 4%;
}
}
</style>