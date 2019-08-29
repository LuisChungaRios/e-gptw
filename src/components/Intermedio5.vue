<template>
    <div id="intermedio5">
        <div class="container intermedio5">
            <div class="row intermedio5 mi-fila">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <h6 class="titulo">
                        <span class="d-block">¿Cómo lo hicimos?</span>
                        <span class="d-block">¡La transformación empezó por nosotros!</span>
                    </h6>
                    <div class="logo-entel">
                        <img src="img/intermedios/int1-icon6.png" alt="" class="img-fluid">
                    </div>
                    <p>El latido vendría codificado bajo los pilares de la marca, como un mensaje: <span class="primero">simple, cercano, confiable y extraordinario</span> que hace sentir al colaborador Entel en el centro de la comunicación y de la experiencia.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@function resp_xl($tamano_xl){
    $rxl: $tamano_xl - $tamano_xl*0.2;
    @return $rxl;
}
@function resp_md($tamano_md){
    $rmd: $tamano_md - $tamano_md*0.4;
    @return $rmd;
}
#intermedio5{
    background-image: url('../../public/img/intermedios/banner5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 105px;
    padding-bottom: 105px;

    .titulo{
        padding-bottom: 45px;
        span:nth-child(1){
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;
            font-size: 40px;
            color: #fb5b87;
        }
        span:nth-child(2){
            font-family: 'Barlow-SemiBold';
            font-style: normal;
            font-weight: 600;            
            font-size: 45.5px;
            color: #005cff;
        }
    }
    .logo-entel{
        padding-bottom: 60px;
    }

    p{
        font-family: 'Barlow-Light';
        font-style: normal;
        font-weight: 200;
        color: #005cff;
        padding: 0px 30px 45px 30px;
        font-size: 23.8px;
        line-height: 30px;
        .primero{
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 400;
            color: #fc6c97;
            font-size: 30px;
        }
    }
}

@media(min-width: 1200px) and (max-width: 1366px){
    #intermedio5{
        padding-top: resp_xl(105px);
        padding-bottom: resp_xl(105px);

        .titulo{
            padding-bottom: resp_xl(45px);
            span:nth-child(1){
                font-size: resp_xl(40px);
            }
            span:nth-child(2){      
                font-size: resp_xl(45.5px);
            }
        }
        .logo-entel{
            padding-bottom: resp_xl(60px);
            img{
                width: resp_xl(320px);
            }
        }

        p{
            font-size: resp_xl(23.8px);
            line-height: resp_xl(30px);
            .primero{
                font-size: resp_xl(30px);
            }
        }
    }    
}

</style>