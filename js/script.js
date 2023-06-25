//Funcionalidade do botão JOGAR NOVAMENTE
document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector(".tela-resultado").style.display = "none"
    document.location.reload()
})
//Iniciar variáveis globais do jogo
const jogadasFeitas = ["","","","","","","","",""]
const simbolos = ["🐪","🐻"]
let jogadorAtual = 0
let ativa = true

//Selecionar todas as celulas do tabuleiro

const celulas = document.querySelectorAll(".celula")

//Adicionar um evento de clique "fazerJogada"que ocorre apenas uma vez na celula 

celulas.forEach(celula => celula.addEventListener('click', fazerJogada, {once: true}))

//Fazer função fazerJogada

function fazerJogada(celula){
    celula.target.innerHTML = simbolos[jogadorAtual]
}

