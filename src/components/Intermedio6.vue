<template>
    <div id="intermedio6">
        <div class="container intermedio6">
            <div class="row intermedio6">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <h6 class="titulo">
                        <span class="d-block">¿Cómo lo hicimos?</span>
                        <span class="d-block">¡La transformación empezó por nosotros!</span>
                    </h6>
                    <div class="logo-entel">
                        <img src="img/intermedios/int5-icon1.png" alt="" class="img-fluid">
                    </div>
                    <p>El colaborador Entel recibe este latido, lo integra y lo vuelve parte de su propia cultura. Ahora no solo vive los pilares para brindar un buen servicio, sino que parte de su propia experiencia para contarlo y se transforma en un EntelLover, en <span class="primero d-block">La Señal Que Transforma</span></p>
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
#intermedio6{
    background-image: url('../../public/img/intermedios/banner6.jpg');
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
            color: #fc6c97;
        }
        span:nth-child(2){
            font-family: 'Barlow-SemiBold';
            font-style: normal;
            font-weight: 600;            
            font-size: 45.5px;
            color: #005cff;
            line-height: 40px;
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
            font-family: 'Barlow-Medium';
            font-style: normal;
            font-weight: 500;
            color: #fc6c97;
            font-size: 36px;
            padding-top: 15px;
        }
    }
}

@media(min-width: 1200px) and (max-width: 1366px){
    #intermedio6{
        padding-top: resp_xl(105px);
        padding-bottom: 1resp_xl(05px);

        .titulo{
            padding-bottom: resp_xl(45px);
            span:nth-child(1){
                font-size: resp_xl(40px);
            }
            span:nth-child(2){         
                font-size: resp_xl(45.5px);
                line-height: resp_xl(40px);
            }
        }
        .logo-entel{
            padding-bottom: resp_xl(60px);
            img{
                width: resp_xl(166px);
            }
        }

        p{
            font-size: resp_xl(23.8px);
            line-height: resp_xl(30px);        
            .primero{
                font-size: resp_xl(36px);
                padding-top: resp_xl(15px);
            }
        }
    }    
}

</style>