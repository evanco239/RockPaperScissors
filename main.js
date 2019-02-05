

var gameButton = document.getElementById('gameButtons');
var newGame = document.getElementById('newGame');
var yourPlay = document.getElementById('yourPicture');
var computerPlay = document.getElementById('computerPicture');
var computerCanvasScore = document.getElementById('computer-canvas-score');
var yourCanvasScore = document.getElementById('your-canvas-score');

newGame.addEventListener('click', buttonPressed);
gameButton.addEventListener('click', buttonPressed);
var yourScore = 0;
var computerScore = 0;
var handsPlayed = 0;

playGame();


//new game button function
function startNewGame(e){
    yourScore = 0;
    computerScore = 0;
    handsPlayed = 0;
    yourPlay.src = '';
    computerPlay.src = '';
    playGame();
}

//main play game function 
function playGame(){
    

}


//game button function
function buttonPressed(e){

    if(e.target.id == 'newGame'){
        
        yourScore = 0;
        computerScore = 0;
        handsPlayed = 0;
        yourPlay.src = '';
        computerPlay.src = '';
        computerCanvasScore.textContent = "Computer Wins: " + computerScore;
        yourCanvasScore.textContent = "Your Wins: " + yourScore;
    }
    else{
        if(e.target.id == 'rock'){
            yourPlay.src = 'rock.png';
        } 
        else if(e.target.id == 'paper'){
            yourPlay.src = 'paper.png';
        } 
        else if(e.target.id == 'scissors'){
            yourPlay.src = 'scissors.png';
        }

        computerHand();

        if(e.target.id == 'rock' && computerHand() =='scissors' || 
           e.target.id == 'paper' && computerHand() =='rock' ||
           e.target.id == 'scissors' && computerHand() =='paper'){
            yourScore++;
        }
        else if(e.target.id == 'scissors' && computerHand() =='rock' || 
                e.target.id == 'rock' && computerHand() =='paper' ||
                e.target.id == 'paper' && computerHand() =='scissors'){
                computerScore++;
        }

        computerCanvasScore.textContent = "Computer Wins: " + computerScore;
        yourCanvasScore.textContent = "Your Wins: " + yourScore;
    }   
}

//computer hand function
function computerHand(){
    var arr1 = ['rock', 'paper', 'scissors'];
    var computerHand = arr1[Math.floor(Math.random() * 3)];
    
    if(computerHand == 'rock'){
        computerPlay.src = 'rock.png';
        return 'rock';
        
    } 
    else if(computerHand == 'paper'){
        computerPlay.src = 'paper.png';
        return 'paper';
    }
    else if(computerHand == 'scissors'){
        computerPlay.src = 'scissors.png';
        return 'scissors';
    } 
}

