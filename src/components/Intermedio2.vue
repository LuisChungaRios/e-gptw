<template>
    <div id="intermedio2">
        <div class="container intermedio2">
            <div class="row intermedio2">
                <div class="offset-lg-2 col-lg-8 offset-xl-0 col-xl-12">
                    <h6 class="text-center">Pero, el verdadero amor no nace a primera vista:
                    <span>es un proceso</span></h6>
                    <ul class="list-amamos row align-items-center">
                        <li class="col align-self-start">
                            <img src="img/intermedios/int2-icon1.png" alt="" class="img-fluid">
                            <p class="primero">Si queremos
                                entrar en el
                                <span class="d-block">CORAZÓN</span>
                                de nuestros
                                clientes</p>
                        </li>
                        <li class="col align-self-end">
                            <img src="img/intermedios/int1-icon6.png" alt="" class="img-fluid">
                            <p>Debemos transmitir una señal que acelere sus <span>LATIDOS</span>
desde nuestros propios corazones como colaboradores Entel, siendo nosotros los principales elovers Entel y de su gente</p>
                        </li>
                        <li class="col align-self-start">
                            <img src="img/intermedios/int2-icon2.png" alt="" class="img-fluid">
                            <p class="tercero">Para transmitirles ese 
                                <span class="d-block">AMOR</span>
                                por lo que hacemos y por lo que vivimos como equipo día a día, bajo un mismo propósito</p>
                        </li>
                    </ul>
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
#intermedio2{
    background-image: url('../../public/img/intermedios/banner2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 105px;
    padding-bottom: 105px;
    h6{
        font-family: 'Barlow-Light';
        font-style: normal;
        font-weight: 200;
        color: #005cff;
        font-size: 36px;
        padding-bottom: 45px;
        span{
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;
            color: #fc6c97;
            font-size: 48px;
            display: block;
        }
    }
    li{
        text-align: center;
        .primero{
            padding: 0 30%;
        }
        .tercero{
            padding: 0 15%;
        }
        p{
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;            
            color: #005cff;
            font-size: 22px;
            line-height: 26px;
            padding-top: 7.5px;
            span{
                font-family: 'Barlow-Medium';
                font-style: normal;
                font-weight: 500;
                color: #f8849f;
            }
        }
    }
    .list-amamos{
        padding-left: 0px;
        padding-bottom: 15px;
    }
}

@media(min-width: 1200px) and (max-width: 1366px){
    #intermedio2{
        padding-top: resp_xl(105px);
        padding-bottom: resp_xl(105px);
        h6{
            font-size: resp_xl(36px);
            padding-bottom: resp_xl(45px);
            span{
                font-size: resp_xl(48px);
            }
        }
        li{
            p{
                font-size: resp_xl(22px);
                line-height: resp_xl(26px);
                padding-top: resp_xl(7.5px);
            }
        }
        .list-amamos{
            padding-bottom: resp_xl(15px);
        }
    }
}
@media(min-width: 992px) and (max-width: 1199px){
    #intermedio2{
        padding-top: resp_md(105px);
        padding-bottom: resp_md(105px);
        h6{
            font-size: resp_md(36px);
            padding-bottom: resp_md(45px);
            span{
                font-size: resp_md(48px);
            }
        }
        li{
            p{
                font-size: resp_md(22px);
                line-height: resp_md(26px);
                padding-top: resp_md(7.5px);
            }
        }
        .list-amamos{
            padding-bottom: resp_md(15px);
        }
    }
}

</style>