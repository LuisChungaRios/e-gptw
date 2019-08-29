<template>
    <div id="final" class="container-fluid">
        <div class="container proposito">
            <div class="row fila-1">
                <div class="offset-lg-1 col-lg-5 offset-xl-0 col-xl-6 caja">
                    <figure class="corazon">
                        <img src="img/secc_final/img-2.png" alt="" class="banner img-fluid">
                    </figure>
                    <p class="text_principal">Ahora que conoces a nuestros<br>
                        E-Lovers internos... </p>
                    <h6 class="text_titulo">¿Sentiste los latidos de sus corazones?</h6>
                    <p class="text_des">Ellos son la <span class="fuerte">mejor señal transformadora</span> que tiene Entel para alcanzar los objetivos y sabemos que su experiencia nos permite crecer como marca y potenciar nuestro posicionamiento.</p>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <img src="img/secc_final/banner1.png" alt="" class="banner1">
                </div>

            </div>
            <div class="row fila-2">
                <div class="col-xl-4 offset-xl-0 offset-lg-1 col-lg-2">
                    <img src="img/secc_final/banner2.png" alt="" class="banner2">
                    <figure class="pr-5">
                        <img src="img/secc_final/img-3.png" alt="" class="figura1 img-fluid">
                    </figure>
                </div>
                <div class="offset-xl-1 col-xl-7 offset-lg-1 col-lg-7 text-right">
                    <h5>
                        <span class="titulo_sombra">Propósito</span>
                        <span class="titulo">Propósito</span>
                    </h5>
                    <p class="texto1 sangria">Un <span class="fuerte1">#EntelLover</span> existe para acercar las infinitas posibilidades que da la tecnología y así  <span class="fuerte2">transformar responsablemente la sociedad.</span></p>
                    <p class="texto1">Por eso actúa de manera  <span class="fuerte3">simple y clara</span>, detonando un cambio expansivo y dinámico, siempre preocupado por su entorno y por el  <span class="fuerte4">impacto de sus acciones</span> porque su enfoque está en el amor por las personas para  <span class="fuerte5">vivir mejor conectado.</span></p>
                </div>

            </div>
        </div>
        <div class="capita_humano">
            <div class="container">
                <div class="row fila-3">
                    <div class="offset-xl-0 col-xl-6 offset-lg-1 col-lg-5">
                        <h5 class="titulo">
                            <span class="titulo_sombra">Capital Humano</span>
                            Capital Humano
                        </h5>
                        <p class="text_principal">Hemos conocido el camino de un colaborador hasta convertirse en un <span class="fuerte">Entel Lover</span>, pero ¿sabes quiénes están detrás de esta misión de transformación? Nuestro equipo de Capital Humano y Administración de Entel es el <span class="fuerte">motor</span> que hace latir esa señal que nos <span class="fuerte">conecta y que transforma.</span> </p>
                        <p class="text_principal">Su liderazgo ha hecho que cada colaborador sea parte de la solución, generando el impulso para hacer <span class="fuerte">las cosas increíbles.</span></p>
                        <p class="text_principal">Ellos también son parte de esta historia y son nuestros <span class="fuerte">#elovermakers</span></p>
                    </div>
                    <div class="col-xl-6 col-lg-6 align-self-center">
                        <img src="img/secc_final/img-1.png" alt="" class="figura2 img-fluid">
                    </div>
                </div> 
            </div>           
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
$p_top: 45px;
$p_bottom: 45px;
$p_color1: #222473;
$p_color2: #fb5b87;

$p_color3: #005cff;
$p_color4: #ff8334;
$p_color5: #42e8b4;
$p_color6: #36c4ed;
$p_color7: #fb5b87;
$p_sombra: #e4eeff; 

$f_regular: 'Barlow';
$f_bold: 'Barlow-Bold';
$f_meditalic: 'Barlow-MediumItalic';
$f_li: 'Barlow-Light';
$f_med: 'Barlow-Medium';
$f_semi: 'Barlow-SemiBold';


/*reducirImagen*/
@function reducirImagen($x){
    $r: $x - ($x * 0.2);
    @return $r;
}


/*Pasar de px a em*/
@function fuente($elemento,$padre: 16px){
    $rem: ($elemento / $padre) * 1rem;
    @return $rem;
}

@function reducirImagenlg($x){
    $r: $x - ($x * 0.4);
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
@function respmd($numero){
    $r: $numero - $numero*0.2;
    @return $r;
}
#final{
    padding-bottom: $p_bottom;
    .fila-1{
        .corazon{
            padding-bottom: fuente(15px);
            img{
                max-width: fuente(126px);
            }
        }
        .caja{
            padding-top: $p_top;
        }
        .text_principal{
            color: $p_color1;
            font-family: $f_li;
            font-weight: 200;
            font-size: fuente(36px);
            line-height: fuente(35px);
            padding-bottom: fuente(36px);
        }
        .text_titulo{
            color: $p_color2;
            font-family: $f_bold;
            font-weight: 700;
            font-size: fuente(60px);
            line-height: fuente(61px);
            padding-bottom: fuente(60px);
        }
        .text_des{
            color: $p_color1;
            font-family: $f_li;
            font-weight: 200;
            font-size: fuente(24px);
            line-height: fuente(34px);
            padding-right: fuente(60px);
            .fuerte{
                font-family: $f_bold;
                font-weight: 700;
                color: $p_color2;
                font-size: fuente(30px);
                line-height: fuente(31px);
            }
        }
        .banner1{
            min-width: calc(50vw + -24px);
            max-width: calc(50vw + -24px);
        }
    }
    .fila-2{
        padding-bottom: fuente(205px);
        .banner2{
            max-width: 30vw;
            position: absolute;
            left: -20vw;
            top: -15vh;
        }
        .figura1{
            position: relative;
            max-width: fuente(272px);
        }
        h5{
            padding-top: fuente(22.5px);
            span{
                display: block;
            }
        }
        .titulo{
            font-family: $f_bold;
            font-weight: 700;
            color: $p_color3;
            font-size: fuente(60px);
        }
        .titulo_sombra{
            font-family: $f_bold;
            font-weight: 700;
            color: $p_sombra;
            font-size: fuente(123.19px);          
            line-height: fuente(100px);  
        }
        .sangria{
            text-indent: 30px;
        }
        .texto1{
            font-family: $f_li;
            color: $p_color1;
            font-weight: 200;
            font-size: fuente(24px);
            line-height: fuente(34px);

        }
        .fuerte1{
            font-family: $f_bold;
            color: $p_color3;
            font-weight: 700;
            font-size: fuente(24px);
        }
        .fuerte2,.fuerte3,.fuerte4,.fuerte5{
            font-family: $f_bold;
            font-weight: 700;
            font-size: fuente(30px);
        }
        .fuerte2{
            color: $p_color4;
        }
        .fuerte3{
            color: $p_color5;
        }
        .fuerte4{
            color: $p_color6;
        }    
        .fuerte5{
            color: $p_color7;
        }            

    }
    .capita_humano{
        background: url('../../public/img/secc_final/banner3.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        margin-left: -15px;
        margin-right: -15px        
    }
    .fila-3{
        padding-top: fuente(150px);
        padding-bottom: fuente(150px);
        .titulo{
            font-family: $f_bold;
            font-weight: 700;
            color: $p_color3;
            font-size: fuente(60px);
            position: relative;
            padding-bottom: fuente(120px);
            margin-bottom: 0px;
            .titulo_sombra{
                font-family: $f_bold;
                font-weight: 700;
                font-size: fuente(123.19px);
                // color: $p_sombra;
                position: absolute;
                top: fuente(-120px);
                color: $p_color3;
                opacity: 0.1;                
            }
        }
        .text_principal{
            font-family: $f_li;
            font-weight: 200;
            font-size: fuente(24px);
            color: $p_color1;
            padding-bottom: fuente(22.5px);
        }
        .fuerte{
            font-family: $f_bold;
            font-weight: 700;
            color: $p_color3;
        }
        // .figura2{
        //     max-width: fuente(724px);
        // }
    }
}
@media(max-width: 1366px){
    #final .fila-1 .text_principal{
        font-size: fuente(respmd(36px));
        line-height: fuente(respmd(35px));
        padding-bottom: fuente(respmd(36px));
    }
    #final .fila-1 .text_titulo{
        font-size: respmd(3.75rem);
        line-height: respmd(3.8125rem);
        padding-bottom: respmd(3.75rem);
    }
    #final .fila-1 .text_des{
        font-size: respmd(1.5rem);
        line-height: respmd(2.125rem);
        padding-right: respmd(3.75rem);
    }
    #final .fila-1 .text_des .fuerte{
        font-size: respmd(1.875rem);
        line-height: respmd(1.9375rem);
    }
    #final .fila-2 .figura1{
        max-width: fuente(reducirImagen(272px));
    }
    #final .fila-1 .corazon img{
        max-width: fuente(reducirImagen(126px));
    }
    #final .fila-2 .titulo_sombra{
        font-size: respmd(123.19px);
        line-height: 1;
    }
    #final .fila-2 .titulo{
        font-size: respmd(60px);
    }
    #final .fila-2 .texto1{
        font-size: respmd(24px);
        line-height: 1.2;
        padding-left: 60px;
    }
    #final .fila-2 .texto1 span{
        font-size: respmd(24px);
        line-height: 1.2;
    }

    #final .fila-3 .titulo{
        font-size: respmd(3.75rem);
        padding-bottom: respmd(7.5rem);

    }
    #final .fila-3 .titulo .titulo_sombra{
        font-size: respmd(7.699375rem);
        top: -4.5rem;
    }

    #final .fila-3{
        padding-top:respmd(9.375rem);
        padding-bottom: respmd(9.375rem);
    }
    #final .fila-2{
        padding-bottom: respmd(12.8125rem);
    }
    #final .fila-3 .text_principal{
        font-size: respmd(1.5rem);
        padding-bottom: respmd(1.40625rem);
    }
}
@media(max-width: 1199px){
    #final .fila-1 .text_principal{
        font-size: fuente(respxl(36px));
        line-height: fuente(respxl(35px));
        padding-bottom: fuente(respxl(36px));
    }
    #final .fila-1 .text_titulo{
        font-size: respxl(3.75rem);
        line-height: respxl(3.8125rem);
        padding-bottom: respxl(3.75rem);
    }
    #final .fila-1 .text_des{
        font-size: respxl(1.5rem);
        line-height: respxl(2.125rem);
        padding-right: respxl(3.75rem);
    }
    #final .fila-1 .text_des .fuerte{
        font-size: respxl(1.875rem);
        line-height: respxl(1.9375rem);
    }
    #final .fila-2 .figura1{
        max-width: fuente(reducirImagen(272px));
    }
    #final .fila-1 .corazon img{
        max-width: fuente(reducirImagen(126px));
    }
    #final .fila-2 .titulo_sombra{
        font-size: respxl(123.19px);
        line-height: 1;
    }
    #final .fila-2 .titulo{
        font-size: respxl(60px);
    }
    #final .fila-2 .texto1{
        font-size: respxl(24px);
        line-height: 1.2;
        padding-left: 60px;
    }
    #final .fila-2 .texto1 span{
        font-size: respxl(24px);
        line-height: 1.2;
    }

    #final .fila-3 .titulo{
        font-size: respxl(3.75rem);
        padding-bottom: respxl(7.5rem);

    }
    #final .fila-3 .titulo .titulo_sombra{
        font-size: respxl(7.699375rem);
        top: -4.5rem;
    }

    #final .fila-3{
        padding-top:respxl(9.375rem);
        padding-bottom: respxl(9.375rem);
    }
    #final .fila-2{
        padding-bottom: respxl(12.8125rem);
    }
    #final .fila-3 .text_principal{
        font-size: respxl(1.5rem);
        padding-bottom: respxl(1.40625rem);
    }


}


</style>