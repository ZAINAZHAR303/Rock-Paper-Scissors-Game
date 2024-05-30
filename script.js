
let userScore = 0;
let compScore = 0;

let userscorepara= document.querySelector("#user_score");
let compscorepara = document.querySelector("#comp_score")

let msg = document.querySelector("#msg")
let user_choice = document.querySelectorAll(".choice")



user_choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{

        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

    })
});

let comp_choice = () =>{
    const select = ['rock','paper','scissors']
    const randid = Math.floor(Math.random()*3)
    return select[randid];
    // console.log(select[randid]);
}


const playgame = (userChoice) =>{
    const compChoice = comp_choice();
    if (userChoice === compChoice) {
        drawgame();

    }else{
        let user_win =true;
        if(userChoice == "rock"){
            user_win=compChoice === "paper"? false : true;
        }else if(userChoice ==="paper"){
            user_win=compChoice==="scissors"?false : true;
        }else{
            user_win=compChoice ==="rock"?false : true;
        }
        showWinner(user_win, userChoice, compChoice);
    }
};


const drawgame = ()=>{
    msg.innerText = "game was drawn!play again."
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (user_win,userChoice,compChoice) =>{
    if(user_win){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `you win ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor  = "green"



    }else{
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `you lose ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}