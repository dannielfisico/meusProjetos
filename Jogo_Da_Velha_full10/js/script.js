document.addEventListener('DOMContentLoaded', () => {
    const jogadas = ["", "", "","", "", "","", "", ""]
    const simbols = ['🎃', "🐄"]
    let player = 0

     //Selecionar todas as celulas do board
    const celulas = document.querySelectorAll('.celula')

    //Função fazerJogada
    const fazerJogada = (evento) => {
        evento.target.innerHTML = simbols[player]
        
        // jogadas[celula.target.id] = simbols[player]
        // salvarJogada
        console.log(evento.target.id)
    }

    //Função salvarJogada
    const salvarJogada = (evento) => {
      jogadas[evento.target.id] = simbols[player]
      console.log(jogadas)
    }

   

    celulas.forEach(celula => {
        celula.addEventListener('click', fazerJogada, salvarJogada, {once: true})
    })

     
     //Adicionar evendo de clique nas celulas
  


})




