let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const userscore= document.querySelector("#user");
const compscore= document.querySelector("#comp");
const msg= document.querySelector(".msg");

const gencompchoice= ()=>{
    const ar_choice=['rock','paper','scissor'];
    const choiceidx= Math.floor(Math.random()*3);
    return ar_choice[choiceidx];
};

choices.forEach(choice=>{
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    } );
});

const drawgame=()=>{
    msg.innerText=`No one won The Game is draw`;
  };

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();
    }else {

    let userwin=true;
     if(userchoice==='rock'){
        userwin=compchoice==='paper'? false:true;
    }

        else if(userchoice==='paper'){
            userwin=compchoice==='scissor'?false:true;
                }
                else if(userchoice==='scissor'){
                    userwin=compchoice==='rock'?false:true;
                }
                showWinner(userwin, userchoice, compchoice );
    }};

    const showWinner=(userwin,userchoice,compchoice)=>{
        if(userwin){
            userScore++;
            userscore.innerText=userScore;
            msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";

        }else{
            compScore++;
            compscore.innerText=compScore;
            msg.innerText= `You Lose. ${compchoice} beats Your ${userchoice}`;
            msg.style.backgroundColor="red";
        }

    };
    



