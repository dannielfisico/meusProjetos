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
    
    const fazerJogada = (e) => {
        console.log(e.target.id)
        e.target.innerHTML = simbolos[player]
    }
    celulas.forEach(celula => {
        celula.addEventListener('click', fazerJogada, {once:true})
    })
  

})