<template>
<div>
    <div id="hablando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/hablando/simbolo.png" alt="">
                        <h3>Hablando</h3>
                    </div>
                    <div class="principal">
                        <p>Nuestros colaboradores tienen la libertad y las herramientas para comunicar sus propuestas de mejora y promover la Cultura Entel. El conocimiento que adquieren al <b>sentir como el 
cliente</b> se transmite a otros miembros del equipo para que puedan <b>experimentar y cambiar</b>, desarrollando así la capacidad de tomar decisiones <b style="color: #36c5ef;">para hacer las cosas increíbles.</b></p>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/hablando/jimmy1.png" alt="">
                </div>
                <div class="col-lg-5 floro">
                    <img src="img/hablando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">“El colaborador Entel es agente de <br>cambio y por eso es un<br>transformador. Animamos al cliente<br>a cambiar y transformarse de la<br>misma forma como lo hacemos<br>nosotros. Aquí puedo hablar porque<br>me siento<br>escuchado <img src="img/hablando/emoji.png "/>”. </p>
                        <h5 class="text-right">Jimmy Arias<br/>(38 años)</h5>
                        <p class="text-right puesto">Asesor Integral<br>Área: Regional<br>Consumidores Lima</p>
                        <div class="conocer text-right">
                            <a href="#inlineJimmy" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="hablando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/hablando/separar.png" alt="" class="img-fluid" >
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>
      <inspirandoDescription/>

        <div id="inlineJimmy" style="background:#fff;border-radius: 5px;" class="lity-hide">
            <div class="container" id="inline-reconociendo">
                <div class="row">
                    <div class="offset-1 col-3">
                        <h4>Jimmy Arias (38)</h4>
                        <p class="cargo">Asesor Integral<br>
                                        Área: Regional<br> 
                                        Consumidores Lima</p>
                        <p class="descr">
                            ¡Hola, soy Jimmy! <img src="img/popup/emoji3.png" alt=""> Tengo 38
                            años, soltero, estudié Ciencias de
                            la Comunicación <img src="img/popup/emoji4.png" alt=""> y trabajo en
                            <b>Entel</b> desde la época de Nextel.
                            Hace 13 años bailo en un grupo de
                            danzas caporales, eso me relaja y
                            me permite <b>conocer gente.</b>
                        </p>
                    </div>
                    <div class="offset-1 col-5">
                        <div class="img-persona">
                            <img src="img/popup/persona5.png" alt="">
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
 import  inspirandoDescription from './InspirandoDescription'
 import Popup from './Popup'
export default {
    name: "Inspirando",
    components: {
        Navegador,
      inspirandoDescription,
      Popup
    }
}
</script>