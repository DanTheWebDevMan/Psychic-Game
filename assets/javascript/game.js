

    
    //*Creates an array that lists out all of the options (Letter from the alphabet). 
    var computerChoices= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var game= 0;
    var wins = 0;
    var losses = 0;
    var guessesLeft= 5;
   
    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];      

      var message = document.getElementById('flash-message');
     

      if (computerChoices.indexOf(userGuess) != -1) {
        message.textContent = '';
        if (wins === 5 || losses ===5) {
            wins = 0;
            losses = 0; 

        }
        /* How can I apply "only alphabet letters accepted? */
            target.textContent = "Only letters of the alphabet are acceptable.";
            target.textContent = "Only letters of the alphabet are acceptable.";
        /* How can I have a countdown list saying how many guesses you have left?

        /* how can I simplify and not have to go A-Z below*/
        
        
        if (
            (computerGuess === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" && userGuess === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ) ||
            (computerGuess === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" && userGuess !== "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" )
            ) {
                losses++;
            } else {
                wins++;;
            }
        } else {
            message.textContent = "Only alphabet letters are acceptable choices";
        }

      var html = 
      "<p>Your guess so far: " + userGuess + "</p>" +
      "<p>Computer Guess: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p> Guesses left:" + guessesLeft + "</p>"  ;

      var game = document.getElementById('game');
      game.innerHTML = html;
    };
 