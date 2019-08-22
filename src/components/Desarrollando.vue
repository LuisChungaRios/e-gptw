<template>
<div>
    <div id="desarrollando">
        <div class="container" style="">
            <div class="row">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/desarrollando/logo.png" alt="">
                        <h3>Desarrollando</h3>
                    </div>
                    <div class="principal">
                        <p><b>Un líder orienta con visión integral</b> y acelera el desarrollo del equipo. Brinda una señal integral y de empoderamiento para priorizar y tomar decisiones acertadas. Por eso, capacitamos constantemente a nuestros colaboradores buscando que ellos promuevan el desarrollo de cada miembro de su equipo y compartan sus conocimientos y motivación para asumir nuevas responsabilidades.</p>
                        <span class="camb">¡Evolucionamos!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/desarrollando/persona.png" alt="">
                </div>
                <div class="col-lg-5 floro">
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
                        <h5 class="text-right">Valeria Madueño (36)</h5>
                        <p class="text-right puesto">
                            Jefe de Canales On Line<br>
                            Área: Experiencia del Cliente<br>
                            Multicanal y Operaciones</p>
                        <div class="conocer text-right">
                            <a href="javascript:void(0)" class="btn-conoceme">
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="desarrollando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <DesarrollandoDescription/>

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
 import  DesarrollandoDescription from './DesarrollandoDescription'
export default {
    name: "Desarrollando",
    components: {
        Navegador,
      DesarrollandoDescription
    }
}
</script>