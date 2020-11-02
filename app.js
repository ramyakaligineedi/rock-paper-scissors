const rules = document.querySelector('.rules');
const rulesPic = document.querySelector('.rulesPic');
const close = document.querySelector('.close');
const main = document.querySelector('.main');

const paper = document.querySelector('.paperDiv');
const scissors = document.querySelector('.scissorsDiv');
const rock = document.querySelector('.rockDiv');


let score = 0;
let userChoice = "";
let computerChoice = "";
let whoWon = [];

/* Rules modal box */
rules.addEventListener('click', ()=>{
    rulesPic.classList.toggle('displayFlex');
    main.classList.toggle('darkBg');
});

close.addEventListener('click', ()=>{
    rulesPic.classList.toggle('displayFlex');
    main.classList.toggle('darkBg');
});

/* Game */
paper.addEventListener('click', ()=>{
    userChoice = "Paper";
    didUserChoose = true;
    play(1,2);
});

scissors.addEventListener('click', ()=>{
    userChoice = "Scissors";
    didUserChoose = true;
    play(1,2);

});

rock.addEventListener('click', ()=>{
    userChoice = "Rock";
    didUserChoose = true;
    play(1,2);

})


const play = (userC,computerC)=>{
    document.querySelector('.game').style.display = "none";
    document.querySelector('.choices').style.display = "flex";
    if(userChoice==='Paper'){
        document.querySelector('.paperChoice').style.display = "flex";
    } else if(userChoice==='Rock'){
        document.querySelector('.rockChoice').style.display = "flex";
    } else if(userChoice==='Scissors'){
        document.querySelector('.scissorsChoice').style.display = "flex";
    }

    let element = randomFigure();
        while(element===userChoice){
            element = randomFigure();
        }
        computerChoice = element;

    setTimeout(()=>{
        

        document.getElementById(`computer${element}`).style.display = "flex";
        // document.querySelector('.noChoiceYet').classList.toggle('displayNone');
        document.querySelector('.noChoiceYet').style.display = "none";
    },1000);


    if(userChoice === "Paper" && computerChoice === "Scissors"){
        whoWon.push("computer","scissors");

    } else if(userChoice === "Paper" && computerChoice === "Rock"){
        whoWon.push("user","paper");

    }

    if(userChoice === "Scissors" && computerChoice === "Paper"){
        whoWon.push("user","scissors");

    } else if(userChoice === "Scissors" && computerChoice === "Rock"){
        whoWon.push("computer","rock");


    }

    if(userChoice === "Rock" && computerChoice === "Paper"){
        whoWon.push("computer","paper");

    } else if(userChoice === "Rock" && computerChoice === "Scissors"){
        whoWon.push("user","rock");

    }

    setTimeout(()=>{
        document.querySelector('.choices').style.display = "none";
        document.querySelector('.result').style.display = "flex";

        switch(userChoice){
            case 'Paper':
                document.getElementById('paperResult').style.display = "flex";
                break;
            case 'Scissors':
                document.getElementById('scissorsResult').style.display = "flex";
                break;
            case 'Rock':
                document.getElementById('rockResult').style.display = "flex";
                break;
        }

        switch(computerChoice){
            case 'Paper':
                document.getElementById('paperResultComputer').style.display = "flex";
                break;
            case 'Scissors':
                document.getElementById('scissorsResultComputer').style.display = "flex";
                break;
            case 'Rock':
                document.getElementById('rockResultComputer').style.display = "flex";
                break;
        }

        switch(whoWon[0]){
            case 'computer':
                document.querySelector('.youLose').style.display = "block";
                document.getElementById(`${whoWon[1]}ResultComputer`).classList.toggle("winnerBoxShadow");
                break;
            case "user":
                document.querySelector('.youWin').style.display = "block";
                document.getElementById(`${whoWon[1]}Result`).classList.toggle("winnerBoxShadow");


        }

        if(whoWon[0] === 'user'){
            score += 1;
            document.querySelector('.nbScore').innerHTML = score;
        }
    
    },2500);
    
}





document.querySelector('.playAgain').addEventListener('click',()=>{
    switch(computerChoice){
        case 'Paper':
            document.getElementById('paperResultComputer').style.display = "none";
            document.getElementById('computerPaper').style.display = "none";
            break;
        case 'Scissors':
            document.getElementById('scissorsResultComputer').style.display = "none";
            document.getElementById('computerScissors').style.display = "none";

            break;
        case 'Rock':
            document.getElementById('rockResultComputer').style.display = "none";
            document.getElementById('computerRock').style.display = "none";

            break;
    }

    switch(userChoice){
        case 'Paper':
            document.getElementById('paperResult').style.display = "none";
            document.querySelector('.paperChoice').style.display = "none";
            break;
        case 'Scissors':
            document.getElementById('scissorsResult').style.display = "none";
            document.querySelector('.scissorsChoice').style.display = "none";

            break;
        case 'Rock':
            document.getElementById('rockResult').style.display = "none";
            document.querySelector('.rockChoice').style.display = "none";

            break;
    }

    switch(whoWon[0]){
        case 'computer':
            document.querySelector('.youLose').style.display = "none";
            document.getElementById(`${whoWon[1]}ResultComputer`).classList.toggle("winnerBoxShadow");
            break;
        case "user":
            document.querySelector('.youWin').style.display = "none";
            document.getElementById(`${whoWon[1]}Result`).classList.toggle("winnerBoxShadow");


    }

    document.querySelector('.noChoiceYet').style.display = "flex";

    computerChoice = "";
    userChoice = "";
    whoWon = [];
    document.querySelector('.result').style.display = "none";
    document.querySelector('.game').style.display = "flex";

})

const randomFigure = () => {
    let figure = ['Paper','Rock','Scissors'];
    let chosenFigure = figure[Math.floor(Math.random() * figure.length)];
    return chosenFigure;
}
