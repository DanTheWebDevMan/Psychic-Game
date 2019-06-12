
    var chances = 0;
    var wins = 0;
    var losses = 0;
    var computerGuess;
    var wrongGuesses = [];
    var computerChoices = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    document.onkeyup = function(event) {
        userKeyPressed = event.key;

        if (chances === 0) {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            chances = 9;
        }
        
        if (computerGuess !== userKeyPressed) {
            if (
                wrongGuesses.indexOf(userKeyPressed == -1 
            )){
                wrongGuesses.push(userKeyPressed);
                    chances--;
                } losses++;
                console.log("chances:" + chances);
            } else {
                wins++;
            }

    
        console.log(wrongGuesses);
        }

        var html =
        "Losses:" + losses  +
        "<p> Guesses Left:" + chances + "</p>";

        document.getElementById('game').innerHTML = html;

        // Finding it difficult to get Javascript code to show up as HTML in browswer. HELP!
            //document.write ?
            //console.log ?
        
        // 
    

       