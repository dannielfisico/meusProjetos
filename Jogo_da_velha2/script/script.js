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

})