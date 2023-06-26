const avatares1rad = document.getElementsByName("player1")
const avatares1txt = document.querySelectorAll('#icone1')
const avatares2rad = document.getElementsByName("player2")
const avatares2txt = document.querySelectorAll('#icone2')
const iconesSelecionados = ["",""]
let avatarPlayer1 = ""
let avatarPlayer2 = ""
let avatarPlayer1txt = []
let avatarPlayer2txt = []
let simbolos = ["", ""]
let jogoComecou = false
let gameOver = false
let jogadorDaVez = 0
let qtdJogadas = 0
let jogadasFeitas = ["","","","","","","","",""]

document.addEventListener('DOMContentLoaded', () => {

    const celulas = document.querySelectorAll(".celula")

    avatares1txt.forEach(txtavatar => {
        for(let c = 0; c < avatares1txt.length; c++){
            avatarPlayer1txt[c] = avatares1txt[c].innerHTML
        }
    })

    avatares2txt.forEach(txtavatar => {
        for(let d = 0; d < avatares2txt.length; d++){
            avatarPlayer2txt[d] = avatares2txt[d].innerHTML
        }
    }) 
})

function jogar(){
     const board = document.querySelector(".board") //seleciona o tabuleiro
    board.style.display = "grid"    //exibe o tabuleiro colocando do diplay em grid
    const formulario = document.querySelector('.formulario') //seleciona o formulario 
    formulario.style.display = "none" //oculta o fomulario
    document.querySelector('.info').style.display = "block"
    
    avatares1rad.forEach(avatar1 => {
        for(var a = 0; a < avatares1rad.length; a++){
            if(avatares1rad[a].checked){
                avatarPlayer1 = a
           }
        }
    })

    avatares2rad.forEach(avatar2 => {
        for(var b = 0; b < avatares2rad.length; b++){
           if(avatares2rad[b].checked){
                avatarPlayer2 = b
           }
        }
    })

    iconesSelecionados[0] = avatarPlayer1
    iconesSelecionados[1] = avatarPlayer2
    simbolos[0] = avatarPlayer1txt[iconesSelecionados[0]]
    simbolos[1] = avatarPlayer2txt[iconesSelecionados[1]]
    document.querySelector("#avatar1").innerHTML = `${simbolos[0]}`
    document.querySelector("#avatar2").innerHTML = `${simbolos[1]}`
    
    /* ############## GAME #######################*/
    //Após o usuário selecionar os avatares dos players e clicar no botão jogar, será dado inico ao jogo
    //log
    console.log(`Avatar P1: ${avatarPlayer1}`)
    console.log(`Avatar P2: ${avatarPlayer2}`)
    console.log(`Icones Selecionados ${iconesSelecionados}`)
    console.log(`Avatares Player txt 1 ${avatarPlayer1txt}`)    
    console.log(`Avatares Player txt 2 ${avatarPlayer2txt}`)
    console.log((`Icones Selecionados : ${avatarPlayer1txt[iconesSelecionados[0]]} e ${avatarPlayer2txt[iconesSelecionados[1]]}`))
    console.log(`Simbolos: ${simbolos}`)

    jogoComecou = true
    startGame()
    
}

function startGame(){
    
    if(jogoComecou){
        console.log(`O jogo começou kkk`)

        const celulas = document.querySelectorAll('.celula')
            celulas.forEach(celula => {
                celula.addEventListener('click', ondeClicou => {
                    if(gameOver){
                        return
                    }

                    console.log(`Clicou na celula de id=${ondeClicou.target.id}`)
                    if (jogadasFeitas[ondeClicou.target.id] == ""){
                        

                        ondeClicou.target.innerHTML = simbolos[jogadorDaVez]
                        jogadasFeitas[ondeClicou.target.id] = simbolos[jogadorDaVez]
                        eCampeao()
                             if(!eCampeao()){
                        passarJogada()
                    }
                    }
                    gameOver = eCampeao()

                    if(qtdJogadas > 8 && !gameOver) {
                        document.querySelector('.resultado').innerHTML = `EMPATE`
                        document.querySelector('.hidden').style.display = "block"
                        document.querySelector('.hidden').addEventListener("click", ()=>{
                            document.location.reload()})
                        
                    }
                    if(gameOver){
                        document.querySelector('.resultado').innerHTML = `${simbolos[jogadorDaVez]} VENCEU.`
                        document.querySelector('.hidden').style.display = "block"
                        document.querySelector('.hidden').addEventListener("click", ()=>{
                            document.location.reload()
                        })
                    }
                })
            })

    } else {
        console.log(`O jogo não começou`)
    }
}

function passarJogada(){
    if(jogadorDaVez == 0){
        jogadorDaVez = 1
        qtdJogadas++
        // tabuleiroPreenchido()
    } else {
        jogadorDaVez = 0 
        qtdJogadas++
        // tabuleiroPreenchido()
    }
}

function tabuleiroPreenchido(){
    if(qtdJogadas == 9){
        const controles = document.querySelector(".formulario")
        controles.style.display = "block"
        setTimeout(() => {
            document.location.reload()
        }, 1000);
    }

}

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

    for(let i = 0; i < estadoVitoria.length; i++){
        let sequencia = estadoVitoria[i]

        let p1 = sequencia[0]
        let p2 = sequencia[1]
        let p3 = sequencia[2]

        if(jogadasFeitas[p1] == jogadasFeitas[p2] && jogadasFeitas[p2] == jogadasFeitas[p3] && jogadasFeitas[p1] != ""){
            return true
        }
     }

     return false
}