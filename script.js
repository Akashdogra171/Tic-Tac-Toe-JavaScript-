'use strict'
let turn ='X'


const changeTurn = ()=>{
    return turn==='X'?'O':'X'
}

let gameOver = false

const checkWin = ()=>{
    const  boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],                                           
        [6,7,8],                                           
        [0,3,6],                                           
        [1,4,7],
        [3,5,8],
        [0,4,8],
        [2,4,6],
        [2,5,8],
    ]

    wins.forEach(e=>{
        if((boxtexts[e[0]].textContent === boxtexts[e[1]].textContent) && (boxtexts[e[1]].textContent ===boxtexts[e[2]].textContent) && (boxtexts[e[0]].textContent !== '')){
            document.querySelector('.info').textContent = `${boxtexts[e[0]].textContent} WON`
            gameOver=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
        }
    })
}

const boxes =  document.querySelectorAll('.box');
boxes.forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',function(e){
        if(boxtext.textContent ===''){
            boxtext.textContent = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].textContent= `Turn for ${turn}`;
            }
        
        }
    })
})



document.getElementById('reset').addEventListener('click',function(){
    const boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(e=>{
        e.textContent = ""
    })
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName('info')[0].textContent= `Turn for ${turn}`;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0'
})