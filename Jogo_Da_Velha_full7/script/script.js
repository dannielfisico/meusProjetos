//Inicar Variáveis Globais

const jogadasFeitas = ["","","","","","","","",""]
const simbolos = ["🤣", "🏆"]
let jogadorAtual = 0
let gameOver = false 

document.addEventListener("DOMContentLoaded", ()=>{
    const celulas = document.querySelectorAll(".celula")
    celulas.forEach(celula =>{
        celula.addEventListener("click", ondeClicou =>{
            let id = ondeClicou.target.id
            ondeClicou.target.innerHTML = `${simbolos[jogadorAtual]}`
            jogadasFeitas[id] = simbolos[jogadorAtual]
            passarJogada()
        })
    })



})

function passarJogada(){
    if(jogadorAtual == 0){
        jogadorAtual = 1
    } else {
        jogadorAtual = 0
    }
}

function eCampeao(){
    const seqVitoriosa = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    seqVitoriosa.forEach(elemento => {
        let seq = elemento
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(jogadasFeitas[pos1] == jogadasFeitas[pos2] && jogadasFeitas[pos1] == jogadasFeitas[pos3] && jogadasFeitas[pos1] != "" ){
            return true
        }
    })
    return false
}
