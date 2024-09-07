let x =document.querySelector(".x")
let o =document.querySelector(".o") 
let boxes=document.querySelectorAll(".box")
let buttons=document.querySelectorAll("#btns-containeres button")
let messageTEXTO=document.querySelector("#message p")
let messagecontainer=document.querySelector("#message")
let secodplayer
//contador de jogadas
let player1=0
let player2=0

//adicionando o evento de click aos boxes
for(let i =0;i <boxes.length;i++){

    //quando alguem clica na caixa
    boxes[i].addEventListener("click",function(){
        let elemento=checkEL(player1,player2)
        
        if(this.childNodes.length==0){
            let cloneEl=elemento.cloneNode(true)
            this.appendChild(cloneEl)
            //computar jogadas
            if(player1==player2){

                player1++
                if(secodplayer == 'ai-player'){
                    computerPlay()
                    player2++
                }
            }
            else{
                player2++
            }
            //verificação de quem venceu
            checkWinCondiction()
        }
        
    })
}
//evento mouse click escolha 
for(let i =0;i <buttons.length ;i++){
    buttons[i].addEventListener('click',function(){
        //escolha um id de um botao apenas
        secodplayer=this.getAttribute("id")
        for (let j=0;j <buttons.length;j++){
            buttons[j].style.display='none'

        }
        //depois que escolhe um botao define um intervalo para aparecer o jogo ,removendo a classe hide que esconde a div
        setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove("hide")
        },500)
    })
}

function checkEL(player1,player2){
    if(player1==player2){
        elemento=x
    }
    else{
        elemento=o
    }
    return elemento
}

function checkWinCondiction(){
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")

    //horizontal primeira linha
    if(b1.childNodes.length >0 && b2.childNodes.length >0 && b3.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b1filho =b1.childNodes[0].className
        let b2filho =b2.childNodes[0].className
        let b3filho =b3.childNodes[0].className
        if(b1filho=='x' && b2filho =='x' && b3filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b1filho=='o' && b2filho =='o' && b3filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //horizontal segunda linha
    if(b4.childNodes.length >0 && b5.childNodes.length >0 && b6.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b4filho =b4.childNodes[0].className
        let b5filho =b5.childNodes[0].className
        let b6filho =b6.childNodes[0].className
        if(b4filho=='x' && b5filho =='x' && b6filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b4filho=='o' && b5filho =='o' && b6filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //horizontal terceira linha
    if(b7.childNodes.length >0 && b8.childNodes.length >0 && b9.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b7filho =b7.childNodes[0].className
        let b8filho =b8.childNodes[0].className
        let b9filho =b9.childNodes[0].className
        if(b7filho=='x' && b8filho =='x' && b9filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b7filho=='o' && b8filho =='o' && b9filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //vertical primeira coluna
    if(b1.childNodes.length >0 && b4.childNodes.length >0 && b7.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b1filho =b1.childNodes[0].className
        let b4filho =b4.childNodes[0].className
        let b7filho =b7.childNodes[0].className
        if(b1filho=='x' && b4filho =='x' && b7filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b1filho=='o' && b4filho =='o' && b7filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //veertical segunda coluna
    if(b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b5filho =b5.childNodes[0].className
        let b2filho =b2.childNodes[0].className
        let b8filho =b8.childNodes[0].className
        if(b5filho=='x' && b2filho =='x' && b8filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b5filho=='o' && b2filho =='o' && b8filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //veertical terceira coluna
    if(b3.childNodes.length >0 && b6.childNodes.length >0 && b9.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b3filho =b3.childNodes[0].className
        let b6filho =b6.childNodes[0].className
        let b9filho =b9.childNodes[0].className
        if(b3filho=='x' && b6filho =='x' && b9filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b3filho=='o' && b6filho =='o' && b9filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //diagonal principal
    if(b1.childNodes.length >0 && b5.childNodes.length >0 && b9.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b1filho =b1.childNodes[0].className
        let b5filho =b5.childNodes[0].className
        let b9filho =b9.childNodes[0].className
        if(b1filho=='x' && b5filho =='x' && b9filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b1filho=='o' && b5filho =='o' && b9filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //diagonal secundária
    if(b3.childNodes.length >0 && b5.childNodes.length >0 && b7.childNodes.length >0){
        //se tem bola ou x pegando o valor da classe
        let b3filho =b3.childNodes[0].className
        let b5filho =b5.childNodes[0].className
        let b7filho =b7.childNodes[0].className
        if(b3filho=='x' && b5filho =='x' && b7filho =='x'){
            console.log("x venceu")
            declareWinner('x')
        }
        else if(b3filho=='o' && b5filho =='o' && b7filho =='o'){
            console.log("o venceu")
            declareWinner('o')
        }
    }
    //deu velha
    let cont=0
    for(let i =0;i <boxes.length;i++){
        if(boxes[i].childNodes.length > 0 && boxes[i].childNodes[0] != undefined){
            cont++
        }
    }
    if (cont==9){
        console.log("deu velha")
        declareWinner('Deu velha!')
    }
}
//declara o vencedor por meio de uma  mensagem exibida ,atualiza o placar e limpa o jogo
function declareWinner(winner){
    let scoreboardX=document.querySelector("#scoreboard-1")
    let scoreboardO=document.querySelector("#scoreboard-2")
    let msg=""
    if(winner =='x'){
        //atualiza o placar do x
        scoreboardX.textContent=parseInt(scoreboardX.textContent)+1
        msg="O jogador 1 venceu"

    }
    else if(winner == 'o'){
        scoreboardO.textContent=parseInt(scoreboardO.textContent)+1
        msg="O jogador 2 venceu"
    }
    else{
        msg="Empatou"
    }
    //mudar o texto da mensagem de acordo com o vencedor
    messageTEXTO.innerHTML=msg
    messagecontainer.classList.remove("hide")

    //esconder mensagem
    setTimeout(function(){
        messagecontainer.classList.add("hide")
    },2000)

    //zerar jogadas
    player1=0
    player2=0
    //remove x e o
    let boxesRemove=document.querySelectorAll(".box div")
    for (let i=0 ;boxesRemove.length ;i++){
        boxesRemove[i].parentNode.removeChild(boxesRemove[i])
    }
}
//executar a lógica do cpu
function computerPlay(){
    let cloneO=o.cloneNode(true)
    cont =0
    filled =0
    for(let i =0;i <boxes.length;i++){
        //numero aleatorio ate 5
        let random =Math.floor(Math.random() * 5)
        //verificar se tem alguma coisa preenchida para nao preencher de novo
        if( boxes[i].childNodes[0] == undefined){
            if(random <=1){
                boxes[i].appendChild(cloneO)
                cont++
                break
            }
        }
        //verificar quantos estão preenchidos
        else{
            filled++
        }
    }
    if(cont ==0 && filled <9){
        computerPlay()
    }
        
}
