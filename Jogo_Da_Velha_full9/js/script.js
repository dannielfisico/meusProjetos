//Funcionalidade do botão JOGAR NOVAMENTE
document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector(".tela-resultado").style.display = "none"
    document.location.reload()
})
//Iniciar variáveis globais do jogo
const jogadasFeitas = ["","","","","","","","",""]
const simbolos = ["🐪","🐻"]
let jogadorAtual = 0
let qtdJogadas = 0

//Selecionar todas as celulas do tabuleiro

const celulas = document.querySelectorAll(".celula")

//Adicionar um evento de clique "fazerJogada"que ocorre apenas uma vez na celula 

celulas.forEach(celula => celula.addEventListener('click', fazerJogada, {once: true}))

//Adicionar evento ao posicionar o mouse sobre a celula

celulas.forEach(celula => celula.addEventListener("mouseenter", posicionarMouse))

function posicionarMouse(celula){
    if(jogadasFeitas[celula.target.id] == ""){
        celula.target.innerHTML = `${simbolos[jogadorAtual]}`
    }
}
//Adicionar evento ao remover o mouse sobre a celula
celulas.forEach(celula => celula.addEventListener("mouseout", retirarMouse))

function retirarMouse(celula){
    if(jogadasFeitas[celula.target.id] == ""){
        celula.target.innerHTML = ``
    }
}

//Fazer função fazerJogada

function fazerJogada(celula){
    celula.target.innerHTML = simbolos[jogadorAtual]
    //Salvar jogada no array jogadasFeitas
    jogadasFeitas[celula.target.id] = simbolos[jogadorAtual]
    console.log(jogadasFeitas)
    eEmpate()
    eCampeao()
    trocarJogador()
    
    //Trocar informação do jogador atual, alternando entre um e outro
    document.querySelector(".info h1:nth-child(1)").innerHTML = `Jogador atual: ${simbolos[jogadorAtual]}`
    //Trocar informação Quantidade de jogadas realizadas
    document.querySelector(".info h1:nth-child(2)").innerHTML = `Quantidade de Jogadas: ${qtdJogadas}`
    
}

function trocarJogador(){
    jogadorAtual = jogadorAtual == 0 ? 1 : 0
    qtdJogadas++
}

//Função que verifica se o jogador foi campeao

function eCampeao(){
    const posicoesCampeans = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < posicoesCampeans.length; i++){
       let sequencia = posicoesCampeans[i]

       let pos0 = sequencia[0]
       let pos1 = sequencia[1]
       let pos2 = sequencia[2]

       if(jogadasFeitas[pos0]== jogadasFeitas[pos1] && jogadasFeitas[pos0] == jogadasFeitas[pos2] && jogadasFeitas[pos0] != ""){
            document.querySelector('.tela-resultado').style.display = "flex"
            document.querySelector('.tela-resultado h1').innerHTML = `${simbolos[jogadorAtual]} Venceu!`
            return true
       }
    }


    return false
}

//Função para verificar se é empate

function eEmpate(){
    if(!eCampeao() && jogadasFeitas.indexOf("") == -1){
        document.querySelector('.tela-resultado').style.display = "flex"
        document.querySelector('.tela-resultado h1').innerHTML = `Empate`
        return true
    }
    return false
}

function eCampeao2(){
    const posicoesCampeans = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    posicoesCampeans.every(sequencia => {
        resp.every(resp => {
            if(jogadasFeitas[sequencia[0]] == jogadasFeitas[sequencia[1]] && jogadasFeitas[sequencia[0]] == jogadasFeitas[sequencia[2]] && jogadasFeitas[resp[0]] != "" ){
                return true
            }
        })
    })


    return false
}