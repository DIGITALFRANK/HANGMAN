
$( document ).ready(function() {

    startGame();


    // API call function to fetch random word => (based on difficulty level)
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


                    // AJAX POST request to update database with user.badgepoint += gain
                    // AJAX POST request to save() WordGame model class instance into database in views.index from dynamic JS variables 
                    // (secretWord, correctGuesses, missedGuesses, difficultyLevel, userWonGame, ... )
                    
                    saveWordGame()
                    updateBadgePoints()

                }
            }; // if none found, add user input word to incorrect guesses list
            if (i == secretWord.length -1 && secretWord.indexOf(letterInput) == -1) {
                // make sure user hasn't already incorrectly guessed letter
                for (let i =0; i < missedGuesses.length; i++) {
                    if (letterInput == missedGuesses[i]) {
                        alert("you've already guessed the letter " + "' " + letterInput.toUpperCase() + " ', it's incorrect")
                        break; // fix this
                    }
                }

                alert('" ' + letterInput.toUpperCase() + ' "' + ' is not in the secret word!');
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
                    $('.revealWord').html(secretWord);
                    saveWordGame()
                    updateBadgePoints()


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


    // function for user option to guess entire word
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


    

    // user start new game
    $("#newGame").click(function (e) {
        e.preventDefault();
        if (userWonGame = true || missedGuesses.length > 5) {
            startGame(); 
        } else {
            alert("you cannot start a new game in the middle of an existing game")
        }  
    });



    // user input letter guess
    $("#letterGuess").click(function (e) {
        e.preventDefault();
        letterGuess($("#letterGuessInput").val());
        // clear textbox value
        $("#letterGuessInput").val('');
    });




    // user input word guess
    $("#wordGuess").click(function (e) {
        e.preventDefault();
        wordGuess($("#wordGuessInput").val());
        // clear textbox value
        $("#wordGuessInput").val('');
    });













    



    /* /////////// whole word guess lightbox /////////// */

    /* Open when someone clicks on the 'menu' element */
    function openLightbox(lightbox, style) {
        var divElement = document.getElementById(lightbox);
        divElement.style.transition = "left .2s ease-in 0s";
        divElement.style.left = style;
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeLighbox(lightbox) {
        document.getElementById(lightbox).style.left = "100%";
    }

    /* /////////// END whole word guess lightbox /////////// */



    $("#gameStatsLightbox").click(function (e) {
        e.preventDefault();
        openLightbox("gameStats", "0");
    });

    $("#gameRulesLightbox").click(function (e) {
        e.preventDefault();
        gameRulesIn();
        // openLightbox("gameRules", "0");
    });

    $("#wordGuessLightbox").click(function (e) {
        e.preventDefault();
        openLightbox("wordGuess", "0");
    });








    /* /////////// game rules lightbox /////////// */

    /* Open when someone clicks on the 'menu' element */
    function gameRulesIn() {
        var gameRules = document.getElementById("gameRules");
        gameRules.style.transition = "left .2s ease-in 0s";
        gameRules.style.left = "0";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeGameRules() {
        document.getElementById("gameRules").style.left = "100%";
    }

    /* /////////// END game rules lightbox /////////// */






    /* /////////// ESC CLOSE on lightboxes /////////// */

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
        //alert('Esc key pressed.');
            closeLightbox()
        }
    });

    /* /////////// END ESC CLOSE /////////// */











}); // end document ready










