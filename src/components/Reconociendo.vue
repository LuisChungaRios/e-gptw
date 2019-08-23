<template>
<div>
    <div id="reconociendo">
        <div class="container" style="">
            <div class="row reconociendo mi-fila">
                <div class="offset-1 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4">
                    <div class="logo">
                        <img src="img/reconociendo/logo.png" alt="">
                        <h3>Reconociendo</h3>
                    </div>
                    <div class="principal">
                        <p>Experimentar y cambiar es parte de un proceso evolutivo que toma la experiencia del entorno y la aplica para generar un valor que ayude a superar dificultades. Un líder transformador genera un cambio positivo en su equipo y crecen juntos. </p>
                        <span class="camb">¡Somos Entel Lovers!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 col-xl-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/reconociendo/persona.png" alt="">
                </div>
                <div class="col-lg-5 col-xl-5 floro">
                    <img src="img/reconociendo/texto.png" alt="" class="fondo">
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
                        <p class="text-right puesto">
                            Vicepresidente de TI y Procesos<br>
                            Área: TI y Procesos<br>
                        </p>
                        <div class="conocer text-right">
                            <a href="javascript:void(0)" class="btn-conoceme">
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="reconociendo-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 col-xl-12 separar">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <ReconociendoDescription/>

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
 import  ReconociendoDescription from './ReconociendoDescription'
export default {
    name: "Reconociendo",
    components: {
        Navegador,
      ReconociendoDescription
    }
}
</script>