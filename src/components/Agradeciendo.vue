<template>
<div>
    <div id="agradeciendo">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/agradeciendo/logo.png" alt="">
                        <h3>Agradeciendo</h3>
                    </div>
                    <div class="principal">
                        <p>Agradecemos el compromiso y excelencia de cada colaborador con reconocimiento profesional. La iniciativa de <b>experimentar</b> da resultados y en Entel manifestamos la gratitud ante el esfuerzo aplicado. Por ese motivo <b>pensamos como cliente interno</b>, sentimos como siente el colaborador demostrando que ambos tenemos un objetivo compartido. <span class="camb">¡Avanzamos hacia la transformación!</span></p>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/agradeciendo/persona.png" alt="">
                </div>
                <div class="col-lg-5 floro">
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
            <div class="row">
                <div class="col-lg-12 separar">
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