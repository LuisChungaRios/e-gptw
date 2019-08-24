<template>
    <div id="intermedio8">
        <div class="container intermedio8">
            <div class="row intermedio8">
                <div class="offset-lg-2 col-lg-8 offset-xl-2 col-xl-8 text-center">
                    <ul class="list-amamos row align-items-center">
                        <li class="col">
                            <img src="img/intermedios/int8-icon1.png" alt="">
                        </li>
                        <li class="col">
                            <img src="img/intermedios/int5-icon1.png" alt="">
                        </li>
                    </ul>

                    <div class="logo-entel">
                        <p>Un Entel Lover es un fan de sus clientes y vive todo el tiempo pensando acerca de como hacerlos felices pero sobre todo vive el día a día motivado por <span class="primero">hacer de Entel el mejor lugar para trabajar en el Perú</span> tomando decisiones acertadas para lograrlo, impulsado por su amor a la empresa y al equipo humano. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#intermedio8{
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
        padding-bottom: 60px;
    }    
    .logo-entel p{
        font-family: 'Barlow-Light';
        font-style: normal;
        font-weight: 200;
        color: #1164f7;
        padding: 0px 30px 0px 30px;
        margin-bottom: 0px;
        font-size: 24px;
        line-height: 26px;     
        .primero{
            font-family: 'Barlow-Bold';
            font-style: normal;
            font-weight: 700;
            color: #e5648b;
            font-size: 23.68;
            line-height: 28px;
        }
    }
}

</style>