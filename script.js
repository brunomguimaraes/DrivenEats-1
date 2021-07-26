let pratoPrincipal;
let bebida;
let sobremesa;
let valorDoPratoPrincipal;
let valorDaBebida;
let valorDaSobremesa;
let total;

function selecionarPratoPrincipal(elemento) {
    const marcado = document.querySelector(".prato-principal .selecionado");
    const icone = document.querySelector(".prato-principal .selecionado .check");
    if (marcado !== null) {
        marcado.classList.remove("selecionado");
        icone.classList.add("oculto");
    }
    elemento.classList.add("selecionado")
    const marcar = document.querySelector(".prato-principal .selecionado .check");
    marcar.classList.remove("oculto");
    let buscandoPrato = document.querySelector(".prato-principal .selecionado .nome-da-opcao")
    pratoPrincipal = buscandoPrato.innerHTML;    
    let buscandoValor = document.querySelector(".prato-principal .selecionado .valor");
    let pegandoValor = buscandoValor.innerHTML;
    let removendoRs = pegandoValor.substring(3);
    valorDoPratoPrincipal = removendoRs.replace(",",".");      
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
    let buscandoBebida = document.querySelector(".bebidas .selecionado .nome-da-opcao")   
    bebida = buscandoBebida.innerHTML;    
    let buscandoValor = document.querySelector(".bebidas .selecionado .valor");
    let pegandoValor = buscandoValor.innerHTML;
    let removendoRs = pegandoValor.substring(3);
    valorDaBebida = removendoRs.replace(",",".")  
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
    let buscandoSobremesa = document.querySelector(".sobremesas .selecionado .nome-da-opcao")
    sobremesa = buscandoSobremesa.innerHTML;  
    let buscandoValor = document.querySelector(".sobremesas .selecionado .valor");
    let pegandoValor = buscandoValor.innerHTML;
    let removendoRs = pegandoValor.substring(3);
    valorDaSobremesa = removendoRs.replace(",",".")   
    terminarPedido();
}
function terminarPedido() {
    let botao = document.querySelector(".barra-inferior button").disabled = true;
    if ((pratoPrincipal !== undefined) && (bebida !== undefined) && (sobremesa !== undefined)) {
        botao = document.querySelector(".barra-inferior button");
        botao.classList.add("terminar-pedido");
        document.querySelector(".paragrafo").innerHTML = "Fechar pedido";
        botao.disabled = false;
    }
}
function revisarPedido() {
    let mostrarTelaFinal = document.querySelector(".conteudo .tela-final");
    mostrarTelaFinal.classList.remove("oculto");
    let opcoesEscolhidas = document.querySelector(".conteudo .opcoes-escolhidas");
    total = (Number(valorDoPratoPrincipal) + Number(valorDaBebida) + Number(valorDaSobremesa)).toFixed(2);
    opcoesEscolhidas.innerHTML = "<p>" + pratoPrincipal + "</p><p>" + bebida + "</p><p>" + sobremesa + "</p><p class=total>TOTAL</p>"
    let valoresDasOpcoes = document.querySelector(".conteudo .valores");
    valoresDasOpcoes.innerHTML = "<p>" + valorDoPratoPrincipal.replace(".",",") + "</p><p>" + valorDaBebida.replace(".",",") + "</p><p>" + valorDaSobremesa.replace(".",",") + "</p><p class=total>R$ " + String(total).replace(".",",") + "</p>"

}
function cancelarPedido() {
    let ocultarTelaFinal = document.querySelector(".conteudo .tela-final");
    ocultarTelaFinal.classList.add("oculto");
}
function fazerPedido() {   
    nomeDoCliente = prompt("Qual é o seu nome?");
    enderecoDoCliente = prompt("Agora, digite o seu endereço: ")
    let mensagemPadrão = "Olá, gostaria de fazer o pedido:\n- Prato: " + pratoPrincipal + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + total + "\n\n Nome: " + nomeDoCliente + "\n Endereço: " + enderecoDoCliente;    
    let urlDaMensagemPadrao = encodeURIComponent(mensagemPadrão);
    let link = "https://wa.me/5592993593563?text=" + urlDaMensagemPadrao;  
    location.href = link;
}





