var elementosDuvida = document.querySelectorAll(".duvida") // Pegando todos elementos "duvida"

// function NOME (ARGUMENTO) {
    //CONTEUDO DA SUNÇÃO
//}
elementosDuvida.forEach(function (duvida) { // Execultar uma função para cada elento "duvida"
   duvida.addEventListener('click', function(){ // add para cada elemento duvida um evento de "Click"
        duvida.classList.toggle('ativa')
   })
})