<template>
<div>
    <div id="celebrando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/celebrando/logo.png" alt="">
                        <h3>Celebrando</h3>
                    </div>
                    <div class="principal">
                        <p>En Entel, <b>si lo haces increíble</b> hay que celebrarlo. Sin jerarquías ni temas funcionales, el trabajo de cada colaborador habla por sí mismo, y éste a su vez comparte su conocimiento para transmitir ese sentimiento de dar lo mejor cada día.</p>
                        <span class="camb">¡Nos transformamos!</span>
                    </div>
                </div>
                <!-- <div class="col-lg-1"></div> -->
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/celebrando/persona.png" alt="">
                </div>
                <div class="col-lg-5 floro">
                    <img src="img/celebrando/texto.png" alt="" class="fondo">
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Lo que más me gusta de las<br>
                            celebraciones es que todas las<br>
                            áreas compartimos más, nos<br>
                            conocemos más, y yo puedo<br>
                            participar de las actividades.<br>
                            Por eso en el Fest Entel de<br>
                            agosto voy a participar bailando<br>
                            <img src="img/celebrando/emoji.png"/> ”. </p>
                        <h5 class="text-right">Nicole Marini<br>(25)</h5>
                        <p class="text-right puesto">
                            Ejecutiva Canal Elité<br>
                            Área: Regional<br>
                            Consumidores<br>
                            Lima - Comercial </p>
                        <div class="conocer text-right">
                            <a href="#inline" class="btn-conoceme" data-lity>
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="celebrando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/reclutando_bottom.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <CelebrandoDescription/>
    </div>
    <!-- <Popup/> -->
</div>    
</template>
<script>
 import Navegador from './Navegador'
 import  CelebrandoDescription from './CelebrandoDescription'
 import Popup from './Popup'
export default {
    name: "Celebrando",
    components: {
        Navegador,
      CelebrandoDescription,
      Popup
    }
}
</script>