<template>
<div>
    <div id="balanceando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/balanceando/logo.png" alt="">
                        <h3>Balanceando</h3>
                    </div>
                    <div class="principal">
                        <p>Para nosotros el desarrollo personal y profesional de cada colaborador es de vital importancia. Por este motivo contamos con buenas prácticas que aportan al balance entre lo personal y laboral de nuestro equipo, motivándolos a <b>experimentar y cambiar</b> su desempeño en pro de una mejora en su trabajo.</p>
                        <span class="camb">¡Mejoramos cada día!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/balanceando/persona.png" alt="">
                </div>
                <div class="col-lg-5 floro">
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
                            <a href="#inline" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="balanceando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/balanceando/separador.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <BalanceandoDescription/>

<!-- Fin Codigo -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                                        
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