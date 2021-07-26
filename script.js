function selecionarPratoPrincipal(elemento) {
    const marcado = document.querySelector(".selecionado");
    const icone = document.querySelector(".selecionado .check");
    if (marcado !== null) {
        marcado.classList.remove("selecionado");
        icone.classList.add("oculto");                                          
    } 
    elemento.classList.add("selecionado")
    const marcar = document.querySelector(".selecionado .check");
    marcar.classList.remove("oculto");
}  

function selecionarBebida(elemento) {
    const marcado = document.querySelector(".bebidas .selecionado");
    const icone = document.querySelector(".bebidas .selecionado .check");    
    if (marcado !== null) {
        marcado.classList.remove("selecionado");
        icone.classList.add("oculto");                                           
    } 

    elemento.classList.add("selecionado")
    const marcar = document.querySelector(".bebidas .selecionado .check");
    marcar.classList.remove("oculto");
}

function selecionarSobremesa(elemento) {
    const marcado = document.querySelector(".sobremesas .selecionado");
    const icone = document.querySelector(".sobremesas .selecionado .check");    
    if (marcado !== null) {
        marcado.classList.remove("selecionado");
        icone.classList.add("oculto");                                          
    } 
    elemento.classList.add("selecionado")
    const marcar = document.querySelector(".sobremesas .selecionado .check");
    marcar.classList.remove("oculto");
}