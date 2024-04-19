let userScore = 0;
let compScore = 0;

const choiced = document.querySelectorAll(".choice");
const btn = document.querySelector("#btn");
const scoresYou = document.querySelector("#scoreYou");
const scoresComp = document.querySelector("#scoreComp");

const getcompChoice =() => {
    const options = ["rock","paper","scissor"];
    const select = Math.floor(Math.random()*3);
    return options[select];
}

const drawfun = () => {
      console.log("game was draw");
      btn.innerText ="Draw";
      btn.style.backgroundColor ="teal";
}

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        userScore++;
        scoresYou.innerText = userScore;
        btn.innerText = `You won ${userChoice} beats ${compChoice}`;
        btn.style.backgroundColor = "green";
        
    }
    else{
        console.log("you lost");
        btn.innerText =`You Lost ${compChoice} beats ${userChoice}`;
        btn.style.backgroundColor = "red";
        compScore++;
        scoresComp.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = getcompChoice();
    console.log("computer choice =",compChoice);

if(userChoice === compChoice){
    drawfun();
}
else{
    let userWin =true; 
    if(userChoice === "rock"){
        userWin= compChoice ==="paper" ? false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice ==="Scissor"?false:true;
    }
    else{
        userWin =compChoice ==="rock" ?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
        }
   
}
choiced.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})