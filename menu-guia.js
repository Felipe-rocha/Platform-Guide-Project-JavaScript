var indiceGuia = document.querySelector(".menu-painel");

var tipoGuia = document.querySelector(".botao-produto-vtpro");



indiceGuia.addEventListener("click", function(){
    
    var pegaTexto = document.querySelector(".plataforma-otimiza");

    var incluiTexto = document.querySelector(".texto-exibido");
    
    incluiTexto.innerHTML = pegaTexto.textContent;
    
});


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