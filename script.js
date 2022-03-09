var guessnumber;
var Score;
var highScore = 0;

function loadgame() {
    Score = 20;
    guessnumber = Math.floor(Math.random() * 20);
    document.getElementById('score').innerHTML = Score;
    document.getElementById('highScore').innerHTML = highScore;
    document.getElementById('guessnumber').innerHTML = '?';
    document.getElementById('guess').value = '';
    document.getElementById('result').value = '';
    document.getElementById('body').classList.remove("loos");
    document.getElementById('body').classList.remove("win");
}

function checkNumber() {
    var guess = document.getElementById('guess').value;
    if (guess.length < 1) {
        alert('Enter Number You Guess.');
    } else {
        if (guessnumber === Number(guess)) {
            if (Score > highScore) {
                highScore = Score;
            }
            document.getElementById('guessnumber').innerHTML = guessnumber;
            document.getElementById('result').innerHTML = 'Congratulation';
            document.getElementById('highScore').innerHTML = highScore;
            document.getElementById('body').classList.remove("loos");
            document.getElementById('body').classList.add("win");
        } else {
            Score--;
            document.getElementById('result').innerHTML = 'Try Again';
            document.getElementById('body').classList.remove("win");
            document.getElementById('body').classList.add("loos");
        }
        document.getElementById('score').innerHTML = Score;
    }
}