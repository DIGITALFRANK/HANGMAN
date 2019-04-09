
// let userId = "";  // Django curent user
let secretWord = "";
let wordReveal = "";
let userWonGame = False;
let missedGuesses = [];
// these variables are what I save to the WordGame model class and save() into the database after each game
// this after creating a new instance of WordGame


function  resetReveal() {

}


function fetchWord() { 
    $.ajax({
        type: 'GET',
        url: url,
        data: {
            // how do I actually retrieve the data fromn the API?
            text: $('.comment_text').val(),
            csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
        },
        success: function(text) {
            secretWord = text;
            for (let i = 0; i < secretWord.length; i++) {
                wordReveal += "_"
                // if (i = wordReveal.length -1) {
                //     wordReveal.push("_")
                // }
            }
            $('.revealWord').innerhtml = wordReveal;
        },
        failure: function() {
            alert('connection to API failed, please try again');
        }
    });
};


function letterGuess(letterInput) {
    for (let i =0; i < secretWord.length; i++) {
        if (secretWord[i] == letterInput) {
            alert("good guess!")
            wordReveal.charAt(i) = letterInput
        } else {
            alert(uppercase(letterInput) + " is not in the secret word!");
            missedGuesses.push(letterInput);
            if (missedGuesses.length == 1) {
                // FrontEnd noose animation
                console.log(missedGuesses)
            } else if (missedGuesses.length == 2) {
                // FrontEnd head animation
                console.log(missedGuesses)
            } else if (missedGuesses.length == 3) {
                // FrontEnd torso animation
                console.log(missedGuesses)
            } else if (missedGuesses.length == 4) {
                // FrontEnd arms animation
                console.log(missedGuesses)
            } else if (missedGuesses.length == 5) {
                // FrontEnd left leg animation
                console.log(missedGuesses)
            } else if (missedGuesses.length == 6) {
                // FrontEnd right leg animation
                console.log(missedGuesses)
                // alert("Sorry you've lost, try a new word")  // done in Django template file
                // FrontEnd button choice start new game / logout
            };
        };
    };
};


function showMisses() {
    for (let i =0; i < missedGuesses.length; i++) {
        missedGuesses.push(missedGuesses[i]);
        $('#missesList').append(createElement('li').innerhtml(missedGuesses[i]));
    };
};


function wordGuess(wordInput) {
    if (wordInput == secretWord) {
        userWonGame = True;
    } else {
        alert(wordInput + 'is not the secret word!');
        missedGuesses.push('*');
        $('#missesList').append(createElement('li').innerhtml('*'));
        // FrontEnd hangman animation 
    };         
};


// function startGame() {
    
// }













