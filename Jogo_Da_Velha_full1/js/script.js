
                        //#region ########### GAME JS ##############
//INICIAR AS VARIÁVEIS
const board = ["", "", "", "", "","", "", "", ""] //representa as 9 posições do tabuleiro
const simbols = ["🛡️", "🎸"]
let playerTime = 0
let gameOver = false
let houveEmpate = false

function handleMove(position){
            //Se a variavel gameOver for verdadeira a função retorna e encerra o handMove aqui!
        if(gameOver){
            return
        }


        //se board[position]  estiver vazio, será adicionando o simbolo do player
        if (board[position] == ""){
                board[position] = simbols[playerTime]


                gameOver = isWin()
                houveEmpate = empate()
           
               
            if(!gameOver){ //Só passa pro proximo jogador se o gameOver for falso
                if(playerTime == 0){
                    playerTime = 1
                } else {
                    playerTime = 0
                }
            }    
                
        }

        return gameOver
}

function isWin(){
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true
        }
        
    }
    return false //Esta função sempre retorna false, a menos que a verificação acima seja verdadeira
}

function empate(){
    if(!gameOver && board.indexOf("") == -1){
        return true
    }
}

//#endregion
/************************************************************************************************************/
                        //#region ########### INTERFACE JS ##############

document.addEventListener('DOMContentLoaded', ()=> {

    let celulas = document.querySelectorAll('.celula')

        celulas.forEach((celula)=> {
            celula.addEventListener('click', handleClick)
             
        })
   

})

//Criar função handleClick (Fora do escopo DOMContentLoaded)

function handleClick(evento){
  
    // console.log(evento.target)
    let position = evento.target.id
    // console.log(position)
   if(handleMove(position)){
    const btn = document.getElementById('btn')
    btn.style.display = 'inline-block'
        setTimeout(()=>{
            alert(`O jogo acabou! | ${simbols[playerTime]} Venceu`)
        },1000)
   }
    updateCelulas(position) //Servirá para atualizar o conteudo da celula
}


//Função para atualizar a celula clicada
function updateCelulas(){
    if(houveEmpate){
        setTimeout(() => {
            alert(`Houve Empate`) 
        },10);
        document.getElementById('btn').style.display = 'inline-block'
    }
    let celulas = document.querySelectorAll('.celula')
    
    celulas.forEach(celula =>{
        let position = celula.id
        let simbol = board[position]

        if (simbol != ""){
            celula.innerHTML = `${simbol}`
        }
    })

}

//função aplicada ao botão JOGAR NOVAMENTE reload da pagina
document.getElementById('btn').addEventListener('click', resetar => {
    document.location.reload()
})

//#endregion

