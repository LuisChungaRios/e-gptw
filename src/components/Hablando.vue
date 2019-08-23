<template>
<div>
    <div id="inspirando">
        <div class="container" style="">
            <div class="row mi-fila">
                <div class="offset-1 col-lg-4">
                    <div class="logo">
                        <img src="img/inspirando/logo.png" alt="">
                        <h3>Inspirando</h3>
                    </div>
                    <div class="principal">
                        <p>En Entel potenciamos las capacidades de nuestros colaboradores y trabajamos por crear un ambiente de <b>igualdad</b>, motivándolos a alcanzar sus metas sin obstáculos y generando buenas prácticas simples y expansivas que den como resultado el crecimiento de cada miembro del equipo. La <b>perseverancia</b> y sus resultados inspiran a cada miembro del equipo a comprometerse hasta lograr que nuestro equipo lo haga increíble. <br/><span>¡Sentimos el cambio!</span></p>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-1 imagen-c">
                    <!-- 501 x 621 -->
                    <img src="img/inspirando/fernando.png" alt="">
                    <!-- <img src="img/inspirando/men.png" alt="">    -->
                </div>
                <div class="offset-lg-1 col-lg-4 floro">
                    <!-- <img src="img/inspirando/texto.png" alt="" class="fondo"> -->
                    <div class="floro-cont">
                        <p class="text-right texto">
                            “Para mí no hubo una forma de hacer<br>
                            las cosas, solo encontrar el espacio<br>
                            y crear mi propia oportunidad.<br>
                            Siempre he creído que la<br>
                            discapacidad la genera el entorno,<br>
                            pero Entel solo se enfoca en<br>
                            potenciar la capacidad de cada uno<br>
                            de nosotros y de darnos la<br>
                            oportunidad de crecer <img src="img/inspirando/emoji.png "/>”. </p>
                        <h5 class="text-right">Fernando García<br/>(47 años)</h5>
                        <p class="text-right puesto">Vicepresidente de TI y<br>Procesos<br>Área: TI y Procesos</p>
                        <div class="conocer text-right">
                            <a href="javascript:void(0)" class="btn-conoceme">
                            <img src="img/btn-corazon.png" alt="corazon">¡Conóceme!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="inspirando-des">
        <div class="container" style="height: 0px;">
            <div class="row">
                <div class="col-lg-12 separar">
                    <img src="img/hablando/separar.png" alt="" class="img-fluid">
                    <p class="titulo">Buenas <b>Prácticas</b></p>                 
                </div>
            </div>
        </div>

        <!-- Codigo -->
      <HablandoDescription/>

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
 import  HablandoDescription from './HablandoDescription'
export default {
    name: "Hablando",
    components: {
        Navegador,
      HablandoDescription
    }
}
</script>