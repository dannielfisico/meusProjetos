document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main')
    document.body.appendChild(main)
    const header = document.createElement('header')
    main.appendChild(header)
    const headerH1 = document.createElement('h1')
    headerH1.innerHTML = `Jogo da Velha`
    header.appendChild(headerH1)
    const linha = document.createElement('hr')
    header.appendChild(linha)
    const headerH2 = document.createElement('h2')
    headerH2.innerHTML = `Vez de: X`
    header.appendChild(headerH2)

    const tabuleiroBoard = document.createElement('div')
    tabuleiroBoard.setAttribute('class','board')
    main.appendChild(tabuleiroBoard)



    const gameOver = document.createElement('div')
    gameOver.setAttribute('class', 'gameOver')
    document.body.appendChild(gameOver)
    const titulo = document.createElement('h1')
    titulo.innerHTML = `VENCEDOR`
    gameOver.appendChild(titulo)
    const btnJogarNovamente = document.createElement('a')
    btnJogarNovamente.setAttribute('href', "#")
    btnJogarNovamente.innerHTML = `Jogar Novamente`
    gameOver.appendChild(btnJogarNovamente)

    //JOGO
    const tabuleiro = ["","","","","","","","",""]
    const simbolos = ['X',"O"]
    let player = 0
    const vezDe = document.querySelector('header h2')
    // const btnJogarNovamente = document.querySelector('.gameOver a')
    const board = document.querySelector('.board')

    btnJogarNovamente.addEventListener('click', () => {
        document.location.reload()
    })

    tabuleiro.forEach((celula, index) => {
        const divSquare = document.createElement('div')
        divSquare.setAttribute('class', 'celula')
        divSquare.setAttribute('id', index)
        board.appendChild(divSquare)
    })

    const celulas = document.querySelectorAll('.celula')

    const trocarJogador = () => {
        if(!eCampeao() && !eEmpate()){
            player = player == 0 ? 1 : 0
            vezDe.innerHTML = `Vez de: ${simbolos[player]}`
        }else {
            document.querySelector('header h2').innerHTML = `JOGO ENCERRADO`
        }
       
    }

   const eCampeao = () => {
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

        for(let i = 0; i< combinacoes.length; i++){
            const seq = combinacoes[i]
            let pos0 = seq[0]
            let pos1 = seq[1]
            let pos2 = seq[2]
            
            if(tabuleiro[pos0] === tabuleiro[pos1] && tabuleiro[pos0] === tabuleiro[pos2] && tabuleiro[pos0] != ""){
                document.querySelector('.gameOver').style.display ='flex'
                document.querySelector('.gameOver h1').innerHTML = `"${simbolos[player]}" VENCEU!`
                
                return true
            }
        }
        return false
   }

   const eEmpate = () => {
    if(!eCampeao() && tabuleiro.indexOf("") === -1){
        document.querySelector('.gameOver').style.display ='flex'
        document.querySelector('.gameOver h1').innerHTML = `EMPATE!`
        return true
    }
    return false
   }
    
    const fazerJogada = (e) => {
        console.log(e.target.id)
        //escrever o simbolo do jogador dentro da celula clicada
        e.target.innerHTML = simbolos[player]
        //salvar o simbolo do jogador no array tabuleiro
        tabuleiro[e.target.id] = simbolos[player]
        console.log(tabuleiro)
        //trocar o simbolo do jogador
        eEmpate()
        eCampeao()
        console.log(eCampeao())
        trocarJogador()
        
    }

    //Para cada ceula de celulas será add um evento de clique que ocorerá apenas uma vez
    celulas.forEach(celula => {
        celula.addEventListener('click', fazerJogada, {once:true})
    }) 

})