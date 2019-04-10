// $( document ).ready(function() {
    // let userId = "";  // Django curent user
    let secretWord = "";
    let wordReveal = [];
    let userWonGame = false;
    let correctGuesses = [];
    let missedGuesses = [];
    let difficultyLevel = 'easy'
    let apiUrl = 'http://app.linkedin-reach.io/words'

    // register possible change in difficulty level
    difficultyLevel = $('#difficulty').value;

    if (difficultyLevel == 'medium') {
        apiUrl = 'http://app.linkedin-reach.io/words+difficulty=medium'; // make necessary url modificaitons
    } else if (difficultyLevel == 'hard') {
        apiUrl = 'http://app.linkedin-reach.io/words+difficulty=hard' ;  // make necessary url modificaitons
    };
    // these variables are registerd to a new instance of the WordGame model class and saved() into the database after each game



    // API call function to fetch random word
    function fetchWord() { 
        $.ajax({
            type: 'GET',
            url: apiUrl,
            success: function(result) {
                console.log("api call made")
                wordsArray = result.split("\n");
                word = wordsArray[Math.floor(Math.random() * wordsArray.length)]
                console.log(word);
                secretWord = word;
                correctGuesses = []; // clear correctGuesses
                missedGuesses = []; // clear missedGuesses
                $('#missesList').html(''); // reset #missedList
                wordReveal = []; // reset wordReveal
                $('.revealWord').html(''); // reset .revealWord
                for (let i = 0; i < secretWord.length; i++) {
                    wordReveal.push("_")
                    $('.revealWord').append('_')
                }
                // $('.revealWord').html(wordReveal);
                // $("#letterGuess").click(letterGuess($("#letterGuessInput").value));
            },
            failure: function() {
                alert('connection to API failed, please try again');
            }
        })
    };



    // user guess function on form submit
    function letterGuess(letterInput) {

        // make sure user hasn't already correctly guessed letter
        for (let i =0; i < correctGuesses.length; i++) {
            if (letterInput == correctGuesses[i]) {
                alert("you've already correclty guessed the letter " + "' " + letterInput.toUpperCase() + " ', it's present")
                break; // fix this
            }
        }

        // iterate for user input letter in secret word
        for (let i =0; i < secretWord.length; i++) {
            if (secretWord[i] == letterInput) {
                alert("good guess!");
                correctGuesses.push(letterInput);
                console.log('correct guesses: ' + correctGuesses);
                wordReveal[i] = letterInput;
                $('.revealWord').html(wordReveal);
                // where does user win with all letter guesses??
                if (secretWord == wordReveal.join("")) {
                    alert("Bravo!!  You've won the game")
                    userWonGame = true;
                }
            }; // if none found, add user input word to incorrect guesses list
            if (i == secretWord.length -1 && secretWord.indexOf(letterInput) == -1) {
                // make sure user hasn't already incorrectly guessed letter
                for (let i =0; i < missedGuesses.length; i++) {
                    if (letterInput == missedGuesses[i]) {
                        alert("you've already correclty guessed the letter " + "' " + letterInput.toUpperCase() + " ', it's incorrect")
                        break; // fix this
                    }
                }

                alert(letterInput + " is not in the secret word!");
                missedGuesses.push(letterInput);
                showMisses()
                if (missedGuesses.length == 1) {
                    // FrontEnd noose animation
                    console.log('missed guesses: ' +  missedGuesses)
                } else if (missedGuesses.length == 2) {
                    // FrontEnd head animation
                    console.log('missed guesses: ' +  missedGuesses)
                } else if (missedGuesses.length == 3) {
                    // FrontEnd torso animation
                    console.log('missed guesses: ' +  missedGuesses)
                } else if (missedGuesses.length == 4) {
                    // FrontEnd arms animation
                    console.log('missed guesses: ' +  missedGuesses)
                } else if (missedGuesses.length == 5) {
                    // FrontEnd left leg animation
                    console.log('missed guesses: ' +  missedGuesses)
                } else if (missedGuesses.length == 6) {
                    // FrontEnd right leg animation
                    console.log('missed guesses: ' +  missedGuesses)
                    alert('Sorry you lost the game, the secret word was "' + secretWord.toUpperCase() + '"! ... try again, start a new game');
                    // startGame() // done in Django template file
                    // FrontEnd button choice start new game / logout
                };
            };
        };
    };

    // show misses to user
    function showMisses() {
        $("<li/>", {
            class: "misses",
            text: missedGuesses[missedGuesses.length -1]
        }).appendTo('#missesList')
    };


    // user option to guess entire word function
    function wordGuess(wordInput) {
        if (wordInput == secretWord) {
            userWonGame = true;
        } else {
            alert(wordInput + 'is not the secret word!');
            missedGuesses.push('*');
            $('#missesList').append(createElement('li').innerhtml('*'));
            // FrontEnd hangman animation 
        };         
    };


    function startGame() {
        userWonGame = false;
        fetchWord();
    }


    // user input letter guess
    $("#letterGuess").click(function (e) {
        e.preventDefault();
        letterGuess($("#letterGuessInput").val());
        // clear textbox value
        $("#letterGuessInput").val('');
    });

    // user start new game
    $("#newGame").click(function (e) {
        e.preventDefault();
        if (userWonGame = true || missedGuesses.length > 5) {
            startGame(); 
        } else {
            alert("you cannot start a new game in the middle of an existing game")
        }  
    });



// }); // end document ready










