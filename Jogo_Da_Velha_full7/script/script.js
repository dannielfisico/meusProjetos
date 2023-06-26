//Inicar Variáveis Globais

const jogadasFeitas = ["","","","","","","","",""]
const simbolos = ["🤣", "🏆"]
let jogadorAtual = 0


document.addEventListener("DOMContentLoaded", ()=>{
    const celulas = document.querySelectorAll(".celula")
    celulas.forEach(celula =>{
        celula.addEventListener("click", ondeClicou =>{
            let id = ondeClicou.target.id
            ondeClicou.target.innerHTML = `${simbolos[jogadorAtual]}`
            jogadasFeitas[id] = simbolos[jogadorAtual]
            eCampeao()
            eEmpate()
            passarJogada()
        },{once: true})
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

    for(let i=0; i<seqVitoriosa.length; i++){
        let sequencia = seqVitoriosa[i]

        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]


        if(jogadasFeitas[pos1] == jogadasFeitas[pos2] && jogadasFeitas[pos1] == jogadasFeitas[pos3] && jogadasFeitas[pos1] != "" ){
            document.querySelector('.tela-resultado').style.display = "flex"
            document.querySelector('.tela-resultado h1').innerHTML = `${simbolos[jogadorAtual]} VENCEU!`
            
            return true
        }
    }
    return false
}

function eEmpate(){
    if(!eCampeao() && jogadasFeitas.indexOf("") == -1){
        document.querySelector('.tela-resultado').style.display = "flex"
        document.querySelector('.tela-resultado h1').innerHTML = `EMPATE!`
    }
}


//Adicioar evento de clique no botão Jogar Novamente
const btnReset = document.querySelector("a")
btnReset.addEventListener('click', () => {
    document.location.reload()
})
