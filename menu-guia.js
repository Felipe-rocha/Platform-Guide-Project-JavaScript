var painelGuia = document.querySelector(".menu-painel");
var vtGuia = document.querySelector(".menu-vt");
var cadastroGuia = document.querySelector(".menu-cadastros");
var acessoGuia = document.querySelector(".menu-acesso");
var suporteGuia = document.querySelector(".menu-suporte");

var tipoGuia = document.querySelector(".botao-produto-vtpro");



painelGuia.addEventListener("click", mudaTexto);
vtGuia.addEventListener("click", mudaTexto);
cadastroGuia.addEventListener("click", mudaTexto);
acessoGuia.addEventListener("click", mudaTexto);
suporteGuia.addEventListener("click", mudaTexto);




function mudaTexto (){
    
    var pegaTexto = document.querySelector(".texto-exibido");    
    
    console.log(this);

    if(this.textContent == "Painel Inicial"){
        var textoMenu = document.querySelector(".texto-1");
        pegaTexto.innerHTML = textoMenu.textContent;
        console.log(textoMenu);
    };

    if(this.textContent == "Vale Transporte"){
        var textoMenu = document.querySelector(".texto-2");
        pegaTexto.innerHTML = textoMenu.textContent;
        console.log(textoMenu);
    };
    if(this.textContent == "Cadastros"){
        var textoMenu = document.querySelector(".texto-3");
        pegaTexto.innerHTML = textoMenu.textContent;
        console.log(textoMenu);
    };
    if(this.textContent == "Acessos"){
        var textoMenu = document.querySelector(".texto-4");
        pegaTexto.innerHTML = textoMenu.textContent;
        console.log(textoMenu);
    };

    if(this.textContent == "Suporte Online"){
        var textoMenu = document.querySelector(".texto-5");
        pegaTexto.innerHTML = textoMenu.textContent;
        console.log(textoMenu);
    };
};




// var textoGuia = document.querySelector(".principal");
// var adicionaTexto = document.querySelector(".vt-pro");
// textoGuia.innerHTML = adicionaTexto.innerHTML;
// console.log(textoGuia.innerHTML);

// tipoGuia.addEventListener("click", function(){
//   var textoGuia = document.querySelector(".texto-guia");
//     var adicionaTexto = document.querySelector(".vt-pro");
//     textoGuia.innerHTML = adicionaTexto.innerHTML;
//     console.log(textoGuia.innerHTML);
// })
    



// var encontraItem = document.querySelector(".painel-beneficiario");
// window.scrollTo(encontraItem.scrollWidth,encontraItem.scrollHeight);
// console.log(encontraItem.innerHTML);