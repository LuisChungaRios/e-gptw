<template>
    <div id="intermedio3">
        <div class="container intermedio3">
            <div class="row intermedio3">
                <div class="offset-lg-0 col-lg-12 offset-xl-0 col-xl-12 text-center">
                    <div class="logo-entel">
                        <img src="img/intermedios/int3-icon2.png" alt="" class="img-fluid">
                    </div>
                    <img src="img/intermedios/int3-icon1.png" alt="" class="img-fluid comunidad">
                    <p><span class="primero">UNA NUEVA</span> <span class="segundo"> COMUNIDAD</span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#intermedio3{
    background-image: url('../../public/img/intermedios/banner3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 105px;
    padding-bottom: 105px;

    .logo-entel{
        padding-bottom: 60px;
    }
    .comunidad{
        padding-bottom: 60px;
    }
    p{
        padding: 45px;
        span{
            font-size: 72px;
        }
        .primero{
            font-family: 'Barlow-Light';
            font-style: normal;
            font-weight: 200;
            color: #fc6c97;
        }
        .segundo{
            font-family: 'Barlow-Medium';
            font-style: normal;
            font-weight: 500;
            color: #005cff;
        }
    }
}

</style>