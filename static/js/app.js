
let userId = "";  // Django curent user
let secretWord = "";
let wordReveal = []
let userWonGame = False
let missedGuesses = []
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
                wordReveal.push("_ ")
                if (i = wordReveal.length -1) {
                    wordReveal.push("_")
                }
            }
        },
        failure: function() {
            alert('connection to API failed, please try again');
        }
    });
};


function guess(letterInput) {
    for (let i =0; i < secretWord.length; i++) {
        if (secretWord[i] == letterInput) {
            alert("good guess!")
            wordReveal[i] = letterInput
        } else {
            alert(uppercase(letterInput) + " is not in the secret word!");
            missedGuesses.push(letterInput);
            if (missedGuesses.length == 1) {
                // FrontEnd noose animation
            } else if (missedGuesses.length == 6) {
                // FrontEnd head animation
            } else if (missedGuesses.length == 6) {
                // FrontEnd torso animation
            } else if (missedGuesses.length == 6) {
                // FrontEnd arms animation
            } else if (missedGuesses.length == 6) {
                // FrontEnd left leg animation;
            } else if (missedGuesses.length == 6) {
                // FrontEnd right leg animation
                alert("Sorry you've lost, try a new word")
                // FrontEnd button choice start new game / logout
            };
        };
    };
};


function showMisses() {

}


funciton guessWholeWord(wordInput) {

}


function startGame() {
    
}













