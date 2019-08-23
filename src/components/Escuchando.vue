<template>
<div>
    <div id="escuchando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/escuchando/logo.png" alt="">
                        <h3>Escuchando</h3>
                    </div>
                    <div class="principal">
                        <p>Conocemos la importancia de que cada colaborador pueda expresarse. Escuchar es entender e interiorizar cada palabra que nos es transmitida, <b>experimentando</b> con el mensaje para generar soluciones que aporten valor. La clave está en tomar los aciertos y errores para convertirlos en aprendizajes, considerando los diferentes puntos de vista de cada miembro del equipo y <b>pensando como el cliente.</b> <br><span class="camb">¡El cambio continúa!</span></p>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/escuchando/persona.png" alt="">
                </div>
                <div class="col-lg-5 floro">
                    <img src="img/escuchando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Te voy a hablar del líder que quiero<br>
                            ser: un líder Entel es aquel que<br>
                            siempre escucha a su equipo y lo<br>
                            motiva a expresarse, les da la<br>
                            confianza y lo empodera para lograr<br>
                            cosas increíbles <img src="img/escuchando/emoji.png "/> ”. </p>
                        <h5 class="text-right">Valeria Madueño (36)</h5>
                        <p class="text-right puesto">
                            Jefe de Canales On Line<br>
                            Área: Experiencia del Cliente<br>
                            Multicanal y Operaciones</p>
                        <div class="conocer text-right">
                            <a href="#inline" class="btn-conoceme"  data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="escuchando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/escuchando/separar.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <EscuchandoDescription/>

<!-- Fin Codigo -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                                        
                </div>
            </div>
        </div>
    </div>
    <Popup/>
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  EscuchandoDescription from './EscuchandoDescription'
 import Popup from './Popup'

export default {
    name: "Escuchando",
    components: {
        Navegador,
      EscuchandoDescription,
      Popup
    }
}
</script>