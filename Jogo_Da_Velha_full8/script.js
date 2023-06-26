const btnWhatsapp = document.querySelector(".btnWhatsapp")

function mostarbtnWhatsapp(){
    setInterval(() => {
        btnWhatsapp.style.display = "block" 
    }, 5000);
}
mostarbtnWhatsapp()
/*################### VARIAVEIS #######################*/
const tabuleiro = ["","","", "","","", "","",""]
let jogadorAtual = 0
const simbolos = ["⚔️", "👻"]
let gameOver = false

const celulas = document.querySelectorAll(".celula")

celulas.forEach(celula => {
    celula.addEventListener('click', clicou, {once: true})
})

function clicou(celula){
    if(gameOver){
        return //retorna e para aqui!
    }

    celula.target.innerHTML = simbolos[jogadorAtual]
    tabuleiro[celula.target.id] = simbolos[jogadorAtual]
    
    gameOver = eCampeao() //###
    if(!eCampeao()){ //se não é campeao, troca jogador
        trocarJogador()
        setTimeout(() => {
            jogadaBot()
        }, 2000);
    } else {
        // document.querySelector(".telaResultado").style.display = 'flex'
        // document.querySelector(".telaResultado h1").innerHTML = `${simbolos[jogadorAtual]} Venceu!`
    }
    
    
    eCampeao()
    eEmpate()
    
}



function trocarJogador(){
    if(jogadorAtual == 0){
        jogadorAtual = 1
        
    }else {
        jogadorAtual = 0
    }
}

function eCampeao(){
    const combinacoes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ] 

    for(let i = 0; i < combinacoes.length; i++){
        let sequencia = combinacoes[i]

        let posicao0 = sequencia[0]
        let posicao1 = sequencia[1]
        let posicao2 = sequencia[2]

        if (tabuleiro[posicao0] == tabuleiro[posicao1] && tabuleiro[posicao0] == tabuleiro[posicao2] && tabuleiro[posicao0] != ""){
            document.querySelector(".telaResultado").style.display = 'flex'
            document.querySelector(".telaResultado h1").innerHTML = `${simbolos[jogadorAtual]} Venceu!`

            let celula0 = document.getElementById(posicao0).setAttribute('style', "background-color: red")
            let celula1 = document.getElementById(posicao1).setAttribute('style', "background-color: red")
            let celula2 = document.getElementById(posicao2).setAttribute('style', "background-color: red")
            return true
        }
    }
    return false
}

function eEmpate(){
    if(!eCampeao() && tabuleiro.indexOf('') == -1){
        document.querySelector(".telaResultado").style.display = 'flex'
        document.querySelector(".telaResultado h1").innerHTML = `EMPATE!`
        // document.querySelector(".tabuleiro").style.left = `300px`
        return true
    }

    return false
}


    document.querySelector("button").addEventListener("click", ()=>{
        document.location.reload()}, {once: true})


function jogadaBot(){
    let posicoesLivres = []

    for(let i = 0; i < tabuleiro.length; i++){
        if(tabuleiro[i] == ""){
            posicoesLivres.push(i)
        }
    }

    console.log(`Posições livres: ${posicoesLivres}`)
    let escolhaBot = Math.floor(Math.random() * posicoesLivres.length)

    console.log(`Escolha do bot: ${escolhaBot}`)

    if(!eCampeao() && !eEmpate()){
        document.getElementById(posicoesLivres[escolhaBot]).innerHTML = simbolos[jogadorAtual]
        tabuleiro[posicoesLivres[escolhaBot]] = simbolos[jogadorAtual]
    }
    
    eCampeao()
    eEmpate()
    trocarJogador()
}