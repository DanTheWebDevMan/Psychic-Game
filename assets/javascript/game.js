
    var chances = 0;
    var wins = 0;
    var losses = 0;
    var computerGuess;
    var wrongGuesses = [];
    var computerChoices = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    document.onkeyup = function(event) {
        userKeyPressed = event.key;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        if (computerGuess !== userKeyPressed) {
            if (chances === 0) {
            losses++
            chances = 9;
        }
        
            if (
                wrongGuesses.indexOf(userKeyPressed == -1 
            )){
                wrongGuesses.push(userKeyPressed);
                    chances--;
                }
                console.log("chances:" + chances);
            } else {
                wins++;
            }

    
        console.log(wrongGuesses);
     

        var html =
        "<p> Losses: " + losses  + "</p>" +
        "<p> Guesses Left: " + chances + "</p>"+
        "<p> Wins: "+ wins +"</p>" +
        "<p> Your guesses so far :" + wrongGuesses + "</p>";

        document.getElementById('game').innerHTML = html;

    }

       