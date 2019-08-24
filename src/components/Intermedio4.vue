<template>
    <div id="intermedio4">
        <div class="container intermedio4">
            <div class="row intermedio4">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <h6 class="titulo">
                        <span class="d-block">¿Cómo lo hicimos?</span>
                        <span class="d-block">¡La transformación empezó por nosotros!</span>
                    </h6>
                    <div class="logo-entel">
                        <img src="img/intermedios/int4-icon1.png" alt="" class="img-fluid">
                    </div>
                    <p>Para que la señal llegue a nuestros clientes y los enamore, creamos una cadena de emociones que empezó por enamorarnos a nosotros mismos. En otras palabras, <span class="primero">transmitimos latidos</span> que convierten a nuestros colaboradores en <span class="segundo">#EntelLovers</span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#intermedio4{
    background-image: url('../../public/img/intermedios/banner4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 105px;
    padding-bottom: 105px;

    .titulo{
        padding-bottom: 60px;
        span:nth-child(1){
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;
            font-size: 40px;
            color: #fc6c97;
        }
        span:nth-child(2){
            font-family: 'Barlow-SemiBold';
            font-style: normal;
            font-weight: 600;            
            font-size: 45.5px;
            color: #0655ec;
        }
    }
    .logo-entel{
        padding-bottom: 60px;
    }

    p{
        font-family: 'Barlow-Light';
        font-style: normal;
        font-weight: 200;        
        color: #0655ec;
        padding: 0px 30px 45px 30px;
        font-size: 23.8px;
        line-height: 30px;
        .primero{
            font-family: 'Barlow-Medium';
            font-style: normal;
            font-weight: 500;
            color: #fc6c97;
            font-size: 30px;
        }
        .segundo{
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 400;
            color: #fc6c97;
            font-size: 38px;
        }
    }
}

</style>