$(window).scroll(function(){

    let pixel    = $(window).scrollTop()
    let altoV    = $(window).height()
    let distCaja = $('.otros__dado').offset().top

    console.log({ pixel , altoV , distCaja })

    if( pixel >= distCaja - altoV ){
        $('.otros__dado').addClass('activo')
    }
    else{
        $('.otros__dado').removeClass('activo')
    }
}) 


let indice = 0

$('.otros__li').click(function(){
    indice = $('.otros__li').index( $(this) )
    activar()
})

$('.der').click(function(){
    indice = indice + 1
    if( indice >= 6 ){
        indice = 0
    }
    activar()
})

$('.izq').click(function(){
    indice = indice - 1
    if( indice <= -1 ){
        indice = 2
    }
    activar()
})

function activar(){
    $('.otros__billete').removeClass('activo')
    $('.otros__punto').removeClass('activo')
    $('.otros__billete').eq( indice ).addClass('activo')
    $('.otros__punto').eq( indice ).addClass('activo')
}


$('.principal__opcion').click(function(){

    let indice = $('.principal__opcion').index( $(this))

    $('.principal__up').removeClass('activo')
    $('.principal__up').eq(indice).addClass('activo')
      
})







