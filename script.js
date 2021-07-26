let pratoPrincipal;
let bebida;
let sobremesa;

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
    pratoPrincipal = elemento.innerHTML;

    terminarPedido();
    
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
    bebida = elemento.innerHTML;

    terminarPedido();
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
    sobremesa = elemento.innerHTML;

    terminarPedido();
}

function terminarPedido() {
    let botao = document.querySelector("button").disabled = true;
    if ((pratoPrincipal !== undefined) && (bebida !== undefined) && (sobremesa !== undefined)) {
        botao = document.querySelector("button");
        botao.classList.add("terminar-pedido");
        document.querySelector(".paragrafo").innerHTML = "Fechar pedido";
        botao.disabled = false;
    }
}

terminarPedido();
