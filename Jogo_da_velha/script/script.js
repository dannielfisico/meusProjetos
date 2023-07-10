document.addEventListener('DOMContentLoaded', () => {
    const tabuleiro = ["","","","","","","","",""]
    const simbolos = ['X',"O"]
    let player = 0
    const board = document.querySelector('.board')
    tabuleiro.forEach((celula, index) => {
        const divSquare = document.createElement('div')
        divSquare.setAttribute('class', 'celula')
        divSquare.setAttribute('id', index)
        board.appendChild(divSquare)
    })

    const celulas = document.querySelectorAll('.celula')

    const trocarJogador = () => {
        player = player == 0 ? 1 : 0
    }

   
    
    const fazerJogada = (e) => {
        console.log(e.target.id)
        //escrever o simbolo do jogador dentro da celula clicada
        e.target.innerHTML = simbolos[player]
        //salvar o simbolo do jogador no array tabuleiro
        tabuleiro[e.target.id] = simbolos[player]
        console.log(tabuleiro)
        //trocar o simbolo do jogador
        trocarJogador()
    }


    celulas.forEach(celula => {
        celula.addEventListener('click', fazerJogada, {once:true})
        
        
    })
  

})

