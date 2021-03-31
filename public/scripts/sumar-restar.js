window.addEventListener('load', function(){
    let sumar = document.querySelector('.btn-cant-1')
    let restar = document.querySelector('.btn-cant')
    let unidades = document.querySelector('#unidad')
    let maximo = unidades.value
    
    sumar.addEventListener('click', function(){
        if (unidades.value != maximo)
        unidades.value ++
    })
    restar.addEventListener('click', function(){
        if (unidades.value != 0)
        unidades.value --
    })
})