

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
var computerPlayHand;

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
    else if(e.target.id == 'rock'){
            yourPlay.src = 'rock.png';
            computerHand();
        } 
    else if(e.target.id == 'paper'){
            yourPlay.src = 'paper.png';
            computerHand();
        } 
    else if(e.target.id == 'scissors'){
            yourPlay.src = 'scissors.png';
            computerHand();
        }

        

        if(e.target.id === 'rock' && computerPlayHand ==='scissors' || 
           e.target.id === 'paper' && computerPlayHand ==='rock' ||
           e.target.id === 'scissors' && computerPlayHand ==='paper'){
            yourScore++;
            computerCanvasScore.textContent = "Computer Wins: " + computerScore;
            yourCanvasScore.textContent = "Your Wins: " + yourScore;
        }
        else if(e.target.id === 'scissors' && computerPlayHand ==='rock' || 
                e.target.id === 'rock' && computerPlayHand ==='paper' ||
                e.target.id === 'paper' && computerPlayHand ==='scissors'){
                computerScore++;
                computerCanvasScore.textContent = "Computer Wins: " + computerScore;
                yourCanvasScore.textContent = "Your Wins: " + yourScore;
        }
        else{
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
        return computerPlayHand = computerHand;
        
    } 
    else if(computerHand == 'paper'){
        computerPlay.src = 'paper.png';
        return computerPlayHand = computerHand;
    }
    else if(computerHand == 'scissors'){
        computerPlay.src = 'scissors.png';
        return computerPlayHand = computerHand;
    } 
}

