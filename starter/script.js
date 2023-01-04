'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!😍';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value = 23;l
let score = 20;
let x = Math.trunc(Math.random()*20)+1
let y = 0;

const dispalyMassage = function(message){
    document.querySelector('.message').textContent = message;//dodaje funkcje by pozbyć się niepotrzebnych powtórzeń
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (score>0){
        if(!guess){
            dispalyMassage('No number! 😢');
        }else if(guess === x){//when players win
            dispalyMassage('Correct Number!😍');
            document.querySelector('.number').textContent = guess;
            document.querySelector('body').style.backgroundColor = '#60b347'; //pamietaj że manipulowanie stylami musimy dodać .style po podaniu klasy
            document.querySelector('.number').style.width = '30rem';//zawsze to musi być nawips i jednostka
            if(score>y){
                //document.querySelector('.highscore').textContent = score;//może być tak ale lepsza ze zmienną!
                y = score;
                document.querySelector('.highscore').textContent = y;
            }

        }else if(guess>x){//za wysokie
            dispalyMassage('Too high!😒');
            document.querySelector('.guess').value = '';
            score = score-1;
        }else if(guess<x){//za niskie
            document.querySelector('.message').textContent = 'Too low!😒';
            document.querySelector('.guess').value = '';
            score = score-1;
        }
        document.querySelector('.score').textContent = score;
        if(score <= 0){
            dispalyMassage('You lost the game 😢');
            document.querySelector('.guess').value = '';
        }   
    }
})
document.querySelector('.again').addEventListener('click', function () {
    x = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    dispalyMassage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222'; //pamietaj że manipulowanie stylami musimy dodać .style po podaniu klasy
    document.querySelector('.number').style.width = '15rem'; //zawsze to musi być nawips i jednostka
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});