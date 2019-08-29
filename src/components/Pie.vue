<template>
    <footer id="footer">
        <div class="container-fluid container1">
            <figure class="mb-0 altura">
                <img src="img/secc_final/footer.png" alt="" class="curva img-fluid">
                <!-- <img src="img/secc_final/footer2.png" alt="" class="curva img-fluid"> -->
            </figure>
            <figure class="text-center valores mb-0">
                <img src="img/secc_final/img-4.png" alt="" class="img-fluid">
            </figure>
            <div class="container">
                <div class="row mi-fila">
                    <div class="offset-lg-3 col-lg-6">

                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid container2">
            <div class="container">
                <div class="row fila2 mi-fila">
                    <div class="offset-lg-2 col-lg-8 text-center">
                        <p class="texto_1">Y en este camino de experiencias memorables, un <span class="fuerte1">Entel Lover…</span></p>

                        <p class="texto_2">Siente como su cliente, lo hace <span class="fuerte2">increíble</span>, <span class="fuerte3">experimenta y cambia</span>, es parte de la <span class="fuerte1">solución</span> y es un <span class="fuerte1">líder transformador</span> que, a la vez, se <span class="fuerte4">transforma constantemente.</span></p>
                        <!-- <figure class="entel">
                            <img src="img/secc_final/entel.png" alt="">
                        </figure> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid container3">
            <div class="container">
                <div class="row mi-fila">
                    <div class="col-12 text-center">
                        <figure class="entel">
                            <img src="img/secc_final/entel.png" alt="" class="img-fluid">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
/*Pasar de px a em*/

$texto: #f5f4f3;
$fuerte1: #f5f4f3;
$fuerte2: #36c4ed;
$fuerte3: #42e8b4;
$fuerte4: #ff82a4;
$colorEntel: #0066c5;

$light: 'Barlow-Light';
$bold: 'Barlow-Bold';


@function fuente($elemento,$padre: 16px){
    $rem: ($elemento / $padre) * 1rem;
    @return $rem;
}
/*reducirImagen*/
@function reducirImagen($x){
    $r: $x - ($x * 0.2);
    @return $r;
}

@function reducirImagenlg($x){
    $r: $x - ($x * 0.3);
    @return $r;
}
@function convRem($x,$padre: 16px){
    $r: ($x/$padre) * 1rem;
    @return $r;
}
@function respxl($numero){
    $r: $numero - $numero*0.45;
    @return $r;
}
#footer{
    .container1{
        padding-bottom: fuente(120px);
    }
    .container2{
        background-color: $colorEntel;
        // padding-top: fuente(120px);
    }
    .container3{
        background-color: #0066c5;
    }
    .altura{
        height: 0;
    }
    // background-color: #0066c5;
    height: 50vh;
    .curva{
        max-width: calc(100vw + -17px);
        margin-left: -15px;
        margin-right: -15px;
    }
    .valores{
        img{
            position: relative;
            z-index: 9;
            margin-top: fuente(-100px);
            max-width: fuente(510px);
        }
    }
    .texto_1{
        padding-bottom: fuente(45px);
    }
    .texto_1,.texto_2{
        font-family: $light;
        font-weight: 200;
        font-size: fuente(24px);
        color: $texto;
        margin-bottom: 0px;
        line-height: fuente(34px);
        span{
            font-family: $bold;
            font-weight: 700;
        }
    }
    .fuerte1{
        color: $fuerte1;
    }
    .fuerte2{    
        color: $fuerte2;
        font-size: fuente(36px);
    }
    .fuerte3{
        color: $fuerte3;
        font-size: fuente(36px);
    }
    .fuerte2{    
        color: $fuerte4;
        font-size: fuente(36px);
    }
    .entel{
        padding-top: fuente(160px);
        padding-bottom: fuente(160px);
        img{
            max-width: fuente(407px);
        }
    }
}
@media(max-width:1366px){
    #footer {
        .container2{
            background-color: $colorEntel;
        }
        .valores{
            img{
                max-width: fuente(reducirImagen(510px));
            }
        }      
        .entel{
            img{
                max-width: fuente(reducirImagen(407px));
            }
        }          
    }
}
@media(max-width:1199px){
    #footer {
        .container2{
            background-color: $colorEntel;
        }
        .valores{
            img{
                max-width: fuente(reducirImagenlg(510px));
            }
        }      
        .entel{
            img{
                max-width: fuente(reducirImagenlg(407px));
            }
        }          
    }
    #footer .entel{
    padding-top: respxl(10rem);
    padding-bottom: respxl(10rem);
    }
    #footer .texto_1{
            padding-bottom: respxl(2.8125rem);
    }
    #footer .texto_1{
                font-size: 1.2rem;
    }
        #footer .texto_2{
                font-size: 1.2rem;
    }
    // #footer .texto_1 span, #footer .texto_2 span{
    //     font-size: 1.9rem;
    // }
}
</style>