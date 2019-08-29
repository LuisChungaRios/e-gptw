<template>
<div>
    <div id="balanceando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-xl-1 col-xl-4 offset-lg-2 col-lg-4">
                    <div class="logo">
                        <img src="img/balanceando/logo.png" alt="">
                        <h3 class="titulop">Balanceando<span class="titulo_sombra">Balan<br>ceando</span></h3>
                    </div>
                    <div class="principal">
                        <p>Para nosotros el desarrollo personal y profesional de cada colaborador es de vital importancia. Por este motivo contamos con buenas prácticas que aportan al balance entre lo personal y laboral de nuestro equipo, motivándolos a <b>experimentar y cambiar</b> su desempeño en pro de una mejora en su trabajo.</p>
                        <span class="camb">¡Mejoramos cada día!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-xl-1 col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/balanceando/persona.png" alt="">
                </div>
                <div class="col-xl-5 col-lg-4 floro">
                    <img src="img/balanceando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Debo reconocer que soy muy muy <br>
                            directa pero en Entel he aprendido a <br>
                            modularme. Soy la mamá de los <br>
                            pollitos en el trabajo y en mi casa, <br>
                            yo soy igual aquí y allá. Yo amo Entel, <br>
                            vengo feliz a trabajar. No me invento <br>
                            excusas ni enfermedades. Estoy <br>
                            muy agradecida por lo que Entel me <br>
                            ha enseñado y la manera como he <br>
                            cambiado mientras asumo los retos <br>
                            que Entel me entrega <img src="img/balanceando/emoji.png" alt="Emoji rostro">."</p>
                        <h5 class="text-right">Marcela Parodi (40)</h5>
                        <p class="text-right puesto">
                            Coordinadora de Gestión del<br>
                            Cambio y Comunicaciones<br>
                            Área: TDE <br>
                            (Transformación Digital Entel)</p>
                        <div class="conocer text-right">
                            <a href="#inlineMarcela" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="balanceando-des">
        <div class="container" style="height: 0px;">
            <div class="row mi-fila">
                <div class="offset-lg-2 col-lg-8 separar offset-xl-1 col-xl-10">
                    <img src="img/balanceando/separador.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <BalanceandoDescription/>

        <div id="inlineMarcela" style="background:#fff;border-radius: 5px;" class="lity-hide">
            <div class="container" id="inline-reconociendo">
                <div class="row">
                    <div class="offset-1 col-3">
                        <h4>Marcela Parodi  (40)</h4>
                        <p class="cargo">Coordinadora de Gestión del
                                        Cambio y Comunicaciones
                                        Área: TDE (Transformación
                                        Digital Entel)
                                        </p>
                        <p class="descr">
                            ¡Hola, soy Marcela! Trabajo en
                            <b>Entel</b> desde hace 12 años cuando
                            era Nextel. Tengo 40 años, casada
                            con 1 hija <img src="img/popup/emoji10.png" alt="">. Estudié
                            Administración de Empresas.
                            Me <b>encanta</b> coleccionar shots de
                            países del mundo <img src="img/popup/emoji9.png" alt=""> y tengo más
                            de 80, incluso de lugares donde 
                            nunca he viajado.            
                        </p>
                    </div>
                    <div class="offset-1 col-5">
                        <div class="img-persona">
                            <img src="img/popup/persona2.png" alt="">
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="img/popup/corazon.png" alt="" class="heart">
                    </div>
                </div>
            </div>
        </div>      


    </div>
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  BalanceandoDescription from './BalanceandoDescription'
export default {
    name: "Balanceando",
    components: {
        Navegador,
      BalanceandoDescription
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
$c_sombra: #0470d4;
$font-size: 132.01px;

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
    // opacity: .2;
}
.camb{
    display: inline-block;
    margin-top: 45px;
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
        font-size: convRem(respxl($font-size));
        // top: convRem(respxl(-60px));
        // line-height: convRem(respxl(87.5px));
        top: -2.9rem;
        line-height: 4.007813rem;        
    }
    .camb{
        margin-top: respxl(45px);
    } 
    #balanceando-des .titulo{
        font-size: 28px;
    }
}
@media(max-width: 1199px){
    #balanceando .imagen-c{
        left: calc(57.5% - 148.43px);
    }
    #balanceando .imagen-c img{
            width: 287.85px;
    }
    #balanceando .floro .fondo{
        left: 0%;
    }
}
</style>