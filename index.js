const playertext=document.querySelector("#playertext")
const computertext=document.querySelector("#computertext")
const resulttext=document.querySelector("#resulttext")

const choicebutton=document.querySelectorAll(".choicebutton")
let player
let computer
let result

choicebutton.forEach(button=>{
//since sending one by one button for each method used because all the button are selected by using a class name hence they are automatically an array so oru oru button ah pass pandro then antha button click pannirukamanu check pannitu proceed

    button.addEventListener("click",()=>{
        player=button.textContent
        computerturn()
        playertext.textContent=`Player : ${player}`
        computertext.textContent=`Computer : ${computer}`
        resulttext.textContent=checkfunction()
    })
})

function computerturn(){
    const randnum=Math.floor(Math.random()*3)+1

    switch(randnum){
        case 1:
            computer="ROCK"
            break
        case 2:
            computer="PAPER"
            break
        case 3:
            computer="SCISSORS"
            break
    }
}

function checkfunction(){
    if(player==computer){
        return "Draw!!"
    }
    else if(computer=="ROCK"){
        return(player=="PAPER")?"You win!" :"You lose"
        
    }
    else if(computer=="PAPER"){
        return(player=="SCISSORS")?"You win!" :"You lose"
    }
    else if(computer=="SCISSORS"){
        return(player=="ROCK")?"You win!" :"You lose"
    }
}
