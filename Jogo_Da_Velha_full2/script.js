//#region #############-----GAME------#########
const tabuleiro = ["","","","","","","","",""]
const icones = ["🐶","🐱"]
let jogador = 0
let gameOver = false
let jogadasRealizadas = 0
let empate = false
let audio = new Audio("./risada-muttley-rabugento.mp3")
let audiodog = new Audio('/0000995.mp3')

function eCampeao(){
    const estadoVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

    for(let i = 0; i< estadoVitoria.length; i++ ){
        let seq = estadoVitoria[i]


        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != ""){
            return true
        }
    }

    return gameOver
}



//#endregion

//#region #############-----INTERFACE------#########
document.addEventListener('DOMContentLoaded',()=>{
    const celulas = document.querySelectorAll(".celula")
    celulas.forEach(celula => {
        celula.addEventListener("click", ondeClicou => {
           if(gameOver){
              return
           }

            let celula = ondeClicou.target.id
           console.log(ondeClicou.target)

           if(tabuleiro[celula] == ""){
                jogadasRealizadas++
                console.log(`Jogadas realizadas: ${jogadasRealizadas}`)
               tabuleiro[celula] = icones[jogador]
               console.log(tabuleiro)
               ondeClicou.target.innerHTML = icones[jogador]

            const txtJogador = document.querySelector('.jogador')
            const txtJogadas = document.querySelector('.jogadas')
            txtJogador.innerHTML = `Última jogada foi do ${icones[jogador]}`
            txtJogadas.innerHTML = `Quantidade de movimentos ${jogadasRealizadas}`

             gameOver = eCampeao()
             console.log(`Jogador atual ${icones[jogador]}`)
             if(gameOver){
                setTimeout(()=>{
                    alert(`Fim de Jogo | Vencedor: ${icones[jogador]}`)
                },10);
                txtJogador.innerHTML = `Fim de Jogo | Vencedor: ${icones[jogador]}`
                resetar()
                
             }

             if(empatou()){
                txtJogador.innerHTML = `Empatou 🤣🤣🤣`
             }
             

             if(!gameOver){
                if(jogador == 0){
                    jogador = 1
                   } else {
                    jogador = 0
                   }   
             }  
           } 
        })
    })
    
})


function empatou(){
    if(jogadasRealizadas>8 && (!eCampeao())){
        audio.play()
        resetar()
        return true
    }
}

function resetar(){
    setTimeout(()=>{
        document.location.reload()
    },5000);
}
//#endregion