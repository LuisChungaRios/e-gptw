<template>
<div>
    <div id="reconociendo">
        <div class="container" style="">
            <div class="row reconociendo mi-fila">
                <div class="offset-xl-1 col-xl-4 offset-lg-2 col-lg-4">
                    <div class="logo">
                        <img src="img/reconociendo/logo.png" alt="">
                        <h3 class="titulop">Reconociendo<span class="titulo_sombra">Recono<br>ciendo</span></h3>
                    </div>
                    <div class="principal">
                        <p>Experimentar y cambiar es parte de un proceso evolutivo que toma la experiencia del entorno y la aplica para generar un valor que ayude a superar dificultades. Un líder transformador genera un cambio positivo en su equipo y crecen juntos. </p>
                        <span class="camb">¡Somos Entel Lovers!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-xl-1 col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/reconociendo/persona_.png" alt="">
                </div>
                <div class="col-xl-5 col-lg-4 floro">
                    <img src="img/reconociendo/texto_.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Entel me transformó, me sacó de la<br>
                            zona de confort y ofreció retos muy<br>
                            exigentes. Reconoció mi desempeño<br>
                            ofreciéndome uno de los retos más<br>
                            importante de la compañía<br>
                            relacionado a la Transformación<br>
                            Digital. Ahora soy un profesional<br>
                            completamente distinto<br>
                            a hace 6 años <img src="img/reconociendo/emoji1.png"/> ."</p>
                        <h5 class="text-right">Fernando García<br>(47 años)</h5>
                        
                        <p class="text-left puesto">Vicepresidente de TI y<br> Procesos<br> Área: TI y Procesos</p>
                        
                        <div class="conocer text-right">
                            <a href="#inlineFernando" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="reconociendo-des">
        <div class="container" style="height: 0px;">
            <div class="row mi-fila">
                <div class="offset-lg-2 col-lg-8 separar offset-xl-1 col-xl-10">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <ReconociendoDescription/>

    </div>
    <Popup/>
</div>    
</template>
<script>
    import Navegador from './Navegador'
    import  ReconociendoDescription from './ReconociendoDescription'
    import Popup from './Popup'
    export default {
        name: "Reconociendo",
        components: {
            Navegador,
            ReconociendoDescription,
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
// $c_sombra: #ffebdf;
$c_sombra: #fb5b87;
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
    margin-top: convRem(30px);
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
    opacity: .2;
}
.camb{
    display: inline-block;
    margin-top: 15px;    
}
/*
    top: -30px;
    line-height: 67.5px;

*/
@media(max-width:1366px){
    .titulop{
        margin-top: convRem(respxl(30px));
        margin-bottom: convRem(respxl(90px));
    }
    .titulo_sombra{
        font-size: 4.214062rem;
        top: -2.03125rem;
        line-height: 3.320313rem;
    }
    .camb{
        margin-top: 15px;    
    }    

}

@media(max-width: 1199px){
    #reconociendo .imagen-c img{
        width: 427px;
    }
    #reconociendo .floro .fondo{
            left: -15%;
    top: 3%;
    }

}
</style>