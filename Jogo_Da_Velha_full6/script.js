const celulas = document.querySelectorAll(".celula")
const jogadasTabuleiro = ["","","","","","","","",""]
let jogadorAtual = 0
const simbolos = ["X", "O"]
let qtdJogadas = 0
let gameOver = false
let resultado = document.querySelector(".resultado")
let btnReset = document.querySelector(".btnReset")


document.addEventListener("DOMContentLoaded", ()=> {
    celulas.forEach(celula =>{
        celula.addEventListener('click', ondeClicou)
        
    })

})

btnReset.addEventListener('click',()=>{
    document.location.reload()
})

function ondeClicou(celula){
    if(gameOver){
        return
    }

    if(jogadasTabuleiro[celula.target.id] == ""){
        qtdJogadas++
        jogadasTabuleiro[celula.target.id] = simbolos[jogadorAtual]
        document.getElementById(celula.target.id).innerHTML = simbolos[jogadorAtual]

        gameOver = eCampeao()
        if(eCampeao()){
            resultado.innerHTML = `RESULTADO: ${simbolos[jogadorAtual]} GANHOU`
        }

       
        
        if(!eCampeao()){
             if(jogadorAtual == 0){
            jogadorAtual = 1
            resultado.innerHTML = `AGUARDANDO JOGADA DO: ${simbolos[jogadorAtual]}`
        }else{
            jogadorAtual = 0
            resultado.innerHTML = `AGUARDANDO JOGADA DO: ${simbolos[jogadorAtual]}`
        }
        }

        if(!eCampeao() && qtdJogadas == 9){
            resultado.innerHTML = `RESULTADO: EMPATE`
        }
        
    }
}

function eCampeao(){
    let possibilidades = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

   for(let i = 0;i<possibilidades.length;i++){
    let sequencia = possibilidades[i]

    let pos1 = sequencia[0]
    let pos2 = sequencia[1]
    let pos3 = sequencia[2]

    if(jogadasTabuleiro[pos1] == jogadasTabuleiro[pos2] && jogadasTabuleiro[pos1] == jogadasTabuleiro[pos3] && jogadasTabuleiro[pos1] != ""){
        return true
    }}
    console.log(jogadasTabuleiro)
    return false}