//Funcionalidade do botão JOGAR NOVAMENTE
document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector(".tela-resultado").style.display = "none"
    document.location.reload()
})
//Iniciar variáveis globais do jogo
const jogadasFeitas = ["","","","","","","","",""]
const simbolos = ["🐪","🐻"]
let jogadorAtual = 0

