<template>
    <div id="intermedio7">
        <div class="container intermedio7">
            <div class="row intermedio7">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <h6 class="titulo">
                        <span>Identidad de marca interna </span>
                        <span>Entel</span>
                    </h6>
                    <ul class="list-amamos row align-items-center">
                        <li class="col">
                            <img src="img/intermedios/int7-icon1.png" alt="">
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int5-icon1.png" alt="">
                        </li>
                        <li class="col">
                            <p class="tercero">YO SOY SOMOS</p>
                        </li>
                    </ul>

                    <div class="logo-entel">
                        <div class="btn-corazon">
                            <img src="img/intermedios/int7-icon2.png" alt="" class="img-fluid">
                            <p>Conexión emocional <span class="segunda">sólida y sostenible</span> entre
                            <span class="primero d-block">empresa y colaborador</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
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

</style>