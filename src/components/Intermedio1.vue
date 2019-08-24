<template>
    <div id="intermedio1">
        <div class="container intermedio1">
            <div class="row intermedio1">
                <div class="offset-lg-0 col-lg-12 offset-xl-0 col-xl-12">
                    <h6 class="text-center">Y, ¿qué sentimos cuando amamos?</h6>
                    <ul class="list-amamos row">
                        <li class="col">
                            <img src="img/intermedios/int1-icon1.png" alt="">
                            <p>Solo quieres estar junto a lo que amas</p>
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int1-icon2.png" alt="">
                            <p>Sentimos que vamos más allá del compromiso</p>
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int1-icon3.png" alt="">
                            <p>Admiración</p>
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int1-icon4.png" alt="">
                            <p>Ganas de darlo todo por lo que amamos</p>
                        </li>
                    </ul>
                    <div class="linea">
                        <img src="img/intermedios/int1-icon5.png" alt="" class="img-fluid">
                        <p class="text-center">¡SENTIMOS SEÑALES!</p>
                    </div>

                    <div class="row align-items-center foot">
                        <div class="offset-lg-1 col-lg-7 offset-xl-1 col-xl-7 text-center">
                            <p>¡EL CORAZÓN NOS LATE MÁS FUERTE!</p>
                        </div>
                        <div class="col-lg-4 col-xl-4">
                            <div class="img-heart">
                                <img src="img/intermedios/int1-icon6.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#intermedio1{
    background-image: url('../../public/img/intermedios/banner1.jpg');
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
        font-size: 48px;
        padding-bottom: 45px;
    }
    p{
        color: #000;
    }
    li{
        text-align: center;
        p{
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;            
            color: #222473;
            font-size: 24px;
            line-height: 26px;
            padding-top: 7.5px;
        }
    }
    .linea{
        img{
            padding-bottom: 30px;
        }
        p{
            font-family: 'Barlow-SemiBold';
            font-style: normal;
            font-weight: 600;
            color:#fc6c97;
            font-size: 24px;
        }
    }
    .list-amamos{
        padding-left: 0px;
        padding-bottom: 15px;
    }
    .linea img{
        width: 100%;
    }
    .foot{
        p{        
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            color: #005cff;
            padding-right: 30px;
            line-height: 52px;
        }
        .img-heart{
            width: 100%;    
        }
    }
}

</style>