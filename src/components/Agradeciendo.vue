<template>
<div>
    <div id="agradeciendo">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-xl-1 col-xl-4 offset-lg-2 col-lg-4">
                    <div class="logo">
                        <img src="img/agradeciendo/logo.png" alt="">
                        <h3 class="titulop">Agradeciendo
                            <span class="titulo_sombra">Agrade<br>ciendo</span></h3>
                    </div>
                    <div class="principal">
                        <p>Agradecemos el compromiso y excelencia de cada colaborador con reconocimiento profesional. La iniciativa de <b>experimentar</b> da resultados y en Entel manifestamos la gratitud ante el esfuerzo aplicado. Por ese motivo <b>pensamos como cliente interno</b>, sentimos como siente el colaborador demostrando que ambos tenemos un objetivo compartido. <span class="camb">¡Avanzamos hacia la transformación!</span></p>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-xl-1 col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/agradeciendo/persona.png" alt="">
                </div>
                <div class="col-xl-5 col-lg-4 floro">
                    <img src="img/agradeciendo/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Cuando postulé para trabajar en<br>
                            Entel quedamos 2 finalistas y salí<br>
                            seleccionado yo me sentí exitoso.<br>
                            Empecé con un cargo bajo pero con<br>
                            el tiempo aprendí, evolucioné y seguí<br>
                            avanzando. Entel siempre sabe cómo<br>
                            agradecer mi esfuerzo con<br>
                            reconocimientos que no<br>
                            esperaba <img src="img/agradeciendo/copa.png"/> ”. </p>
                        <h5 class="text-right">Jimmy Arias<br>(38 años)</h5>
                        <p class="text-right puesto">
                            Asesor Integral<br>
                            Área: Regional<br>
                            Consumidores Lima</p>
                        <div class="conocer text-right">
                            <a href="#inlineJimmy" class="btn-conoceme"  data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="agradeciendo-des">
        <div class="container" style="height: 0px;">
            <div class="row mi-fila">
                <div class="offset-lg-2 col-lg-8 separar offset-xl-1 col-xl-10">
                    <img src="img/agradeciendo/separar.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <AgradeciendoDescription/>
    </div>
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  AgradeciendoDescription from './AgradeciendoDescription'
export default {
    name: "Agradeciendo",
    components: {
        Navegador,
      AgradeciendoDescription
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
    margin-bottom: convRem(90px);
}
.titulo_sombra{
    @extend %fuenteBold;
    color: $c_sombra;
    font-size: convRem($font-size);
    position: absolute;
    left: convRem(0px);
    top: convRem(-75px);
    line-height: convRem(105px);
    z-index: -9;
    opacity: .2;
}
/*
    opacity: .2;
    line-height: 105px;
    top: -75px;

*/
@media(max-width:1366px){
    .titulop{
        margin-top: convRem(respxl(60px));
        margin-bottom: convRem(respxl(90px));
    }
    .titulo_sombra{
        font-size: convRem(respxl($font-size));
        top: convRem(respxl(-75px));
        line-height: convRem(respxl(105px));
        z-index: -9;
        opacity: .2;
    }
    #agradeciendo .principal p .camb{
        margin-top: convRem(respxl(30px));
    }
    #agradeciendo-des .titulo{        
        font-size: 28px;
    }

}
@media(max-width: 1199px){
    .principal{
        padding-right: 2rem;
    }
    #agradeciendo .imagen-c{
        left: calc(52.5% - 215.41px);
    }
    #agradeciendo .imagen-c img{
        width: 420.83px;
    }
    #agradeciendo .floro .fondo{
                width: 418px;
                left: -7.5%;
                top: 5%;
    }

}
</style>