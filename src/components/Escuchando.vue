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
                            <a href="#inlineValeria" class="btn-conoceme"  data-lity>
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
      <EscuchandoDescription/>

        <div id="inlineValeria" style="background:#fff;border-radius: 5px;" class="lity-hide">
            <div class="container" id="inline-reconociendo">
                <div class="row">
                    <div class="offset-1 col-3">
                        <h4>Valeria Madueño (36)</h4>
                        <p class="cargo">Jefe de Canales On Line<br>
                                        Área: Experiencia del Cliente<br> 
                                        Multicanal y Operaciones</p>
                        <p class="descr">
                            ¡Hola, soy Valeria! Soy publicista, tengo 
                            35 años y junto con 2 amigas tengo el blog 
                            Viajeras CAV con más de 23 mil
                            seguidores y tiene como objetivo <b>difundir</b> 
                            todos los lugares bonitos del Perú <img src="img/popup/emoji7.png" alt=""> y
                            de esta manera apoyar el turismo en el
                            país. ¡El reto está en viajar, sin pedir
                            vacaciones! Llevo 4 años trabajando en
                            <b>Entel</b> y... ¡soy una <b>e-lover</b> total! <img src="img/popup/emoji8.png" alt="">                       
                        </p>
                    </div>
                    <div class="offset-1 col-5">
                        <div class="img-persona">
                            <img src="img/popup/persona3.png" alt="">
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="img/popup/corazon.png" alt="" class="heart">
                    </div>
                </div>
            </div>
        </div>      




    </div>
    <!-- <Popup/> -->
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