<template>
    <div id="intermedio7">
        <div class="container intermedio7">
            <div class="row intermedio7 mi-fila">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <h6 class="titulo">
                        <span>Identidad de marca interna </span>
                        <span>Entel</span>
                    </h6>
                    <ul class="list-amamos row align-items-center">
                        <li class="col">
                            <img src="img/intermedios/int7-icon1.png" alt="" class="img-fluid imagen_1">
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int5-icon1.png" alt="" class="img-fluid imagen_2">
                        </li>
                        <li class="col">
                            <p class="tercero">YO SOY SOMOS</p>
                        </li>
                    </ul>

                    <div class="logo-entel">
                        <div class="btn-corazon">
                            <img src="img/intermedios/int7-icon2.png" alt="" class="img-fluid">
                            <p class="w-100">Conexión emocional <span class="segunda">sólida y sostenible</span> entre
                            <span class="primero d-block">empresa y colaborador</span></p>
                        </div>
                    </div>

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
#intermedio7{
    background-image: url('../../public/img/intermedios/banner7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 105px;
    padding-bottom: 105px;

    .titulo{
        padding-bottom: 75px;
        span{
            font-size: 46.45px;
            color: #005cff;
        }
        span:nth-child(1){
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;
        }
        span:nth-child(2){
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;            
            line-height: 40px;
        }
    }
    .list-amamos{
        padding-left: 0px;
        padding-bottom: 45px;
        .tercero{
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;           
            color: #005cff;
            font-size: 60px;
            margin-bottom: 0px;
            line-height: 56px;
        }
    }
    
    .logo-entel{
        width: 115%;
        margin-left: -7.5%;
        padding-bottom: 60px;
    }
    .btn-corazon{
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 75px;
        img{
            padding-left: 7.5px;
        }
    }

    .logo-entel p{
        font-family: 'Barlow-Medium';
        font-style: normal;
        font-weight: 500;
        color: #005cff;
        padding: 0px 30px 0px 30px;
        margin-bottom: 0px;
        font-size: 30px;
        // line-height: 30px;        
        .primero{
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;
            color: #fc6c97;
            font-size: 48px;
            line-height: 42px;
        }
        .segunda{
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            color: #005cff;

        }
    }
}

@media(max-width: 1366px){
    #intermedio7{
        padding-top: resp_xl(105px);
        padding-bottom: resp_xl(105px);

        .titulo{
            padding-bottom: resp_xl(75px);
            span{
                font-size: resp_xl(46.45px);
            }
            span:nth-child(2){         
                line-height: resp_xl(40px);
            }
        }
        .list-amamos{
            padding-bottom: resp_xl(45px);
            .tercero{
                font-size: resp_xl(60px);
                line-height: resp_xl(56px);
            }
        }
        
        .logo-entel{
            width: 100%;
            margin-left: 0%;
            padding-bottom: resp_xl(60px);
        }
        .btn-corazon{
            border-radius: resp_xl(75px);
            img{
                padding-left: resp_xl(7.5px);
                width: resp_xl(133px);
            }
        }
        .logo-entel p{
            font-size: resp_xl(30px);
            // line-height: 30px;        
            .primero{
                font-size: resp_xl(48px);
                line-height: resp_xl(42px);
            }
            .segunda{
                font-size: resp_xl(30px);
            }
        }
        .imagen_1{
            width: resp_xl(183px);
        }
        .imagen_2{
            width: resp_xl(166px);
        }
    }
    #intermedio7 .logo-entel p{
        line-height: 1;        
    }

}
</style>