<template>
<div>
    <div id="desarrollando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-xl-1 col-xl-4 offset-lg-2 col-lg-4">
                    <div class="logo">
                        <img src="img/desarrollando/logo.png" alt="">
                        <h3 class="titulop">Desarrollando
                            <span class="titulo_sombra">Desa<br>rrollando</span>
                        </h3>
                    </div>
                    <div class="principal">
                        <p><b>Un líder orienta con visión integral</b> y acelera el desarrollo del equipo. Brinda una señal 360° y de empoderamiento para priorizar y tomar decisiones acertadas. Por eso, capacitamos constantemente a nuestros colaboradores buscando que ellos promuevan el desarrollo de cada miembro de su equipo y compartan sus conocimientos y motivación para asumir nuevas responsabilidades.</p>
                        <span class="camb">¡Evolucionamos!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-xl-1 col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/desarrollando/persona.png" alt="">
                </div>
                <div class="col-xl-5 col-lg-4 floro">
                    <img src="img/desarrollando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Cuando empecé a trabajar estaba <br>
                            sola y ahora tengo a un increíble <br>
                            equipo de 6 personas <img src="img/desarrollando/emoji1.png" alt="Emoji Brazo">. Siento <br>
                            que hay un desarrollo bastante<br>
                            grande del canal y aquí estoy. Voy a <br>
                            cumplir 5 años trabajando aquí, <br>
                            amo Entel y a todo mi equipo <img src="img/desarrollando/emoji2.png" alt="Emoji Corazon">."</p>
                        <h5 class="text-right">Valeria Madueño (35)</h5>
                        <p class="text-right puesto">
                            Jefe de Canales On Line<br>
                            Área: Experiencia del Cliente<br>
                            Multicanal y Operaciones</p>
                        <div class="conocer text-right">
                            <a href="#inlineValeria" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="desarrollando-des">
        <div class="container" style="height: 0px;">
            <div class="row mi-fila">
                <div class="offset-lg-2 col-lg-8 separar offset-xl-1 col-xl-10">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <DesarrollandoDescription/>

<!-- Fin Codigo -->
    </div>
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  DesarrollandoDescription from './DesarrollandoDescription'
 import Popup from './Popup'
export default {
    name: "Desarrollando",
    components: {
        Navegador,
      DesarrollandoDescription,
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
$c_sombra: #ffebdf;
$font-size: 93.5px;

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
    margin-bottom: convRem(90px);
}
.titulo_sombra{
    @extend %fuenteBold;
    color: $c_sombra;
    font-size: convRem($font-size);
    position: absolute;
    left: convRem(0px);
    top: convRem(-30px);
    line-height: convRem(67.5px);
    z-index: -9;
    // opacity: .2;
}
/*
    top: -30px;
    line-height: 67.5px;

*/
@media(max-width: 1366px){
    .titulop{
    margin-top: convRem(respxl(60px));
    margin-bottom: convRem(respxl(90px));
    }
    .titulo_sombra{
    font-size: convRem(respxl($font-size));
    top: convRem(respxl(-30px));
    // line-height: convRem(respxl(67.5px));
    line-height: 3rem;
    }
    #desarrollando-des .titulo{
        font-size: 28px;
    }

}
@media(max-width: 1199px){
    .principal{
        padding-right: 30px;
    }
    #desarrollando .imagen-c{
        left: calc(55.5% - 127.41px);
    }
    #desarrollando .imagen-c img{
            width: 248.82px;
    }
    #desarrollando .floro .fondo{
        width: 440px;
        top: 4%;
        left: -9%;
    }
    
}
</style>