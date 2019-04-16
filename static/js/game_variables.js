
    // let userId = "";  // Django curent user
    let secretWord = "";
    let wordReveal = [];
    let userWonGame = false;
    let correctGuesses = [];
    let missedGuesses = [];
    let difficultyLevel = 'easy';
    let apiUrl = 'http://app.linkedin-reach.io/words?difficulty=1&difficulty=2&difficulty=3';

    

    // register possible change in difficulty level
    // difficultyLevel = $('#difficulty').value;

    if (difficultyLevel == 'medium') {
        apiUrl = 'http://app.linkedin-reach.io/words?difficulty=4&difficulty=5&difficulty=6'; // make necessary url modificaitons
    } else if (difficultyLevel == 'hard') {
        apiUrl = 'http://app.linkedin-reach.io/words?difficulty=7&difficulty=8&difficulty=9';  // make necessary url modificaitons
    };


    // firstLetter = $('#firstLettr').value;

    // switch  (firstLetter) {
    //     case 'A':
    //         // AJAX filters response for words that start with 'A'
    //     break;
    //     case 'B':
    //         // AJAX filters response for words that start with 'B'
    //     break;
    //     default:
    //         // is there a default?
    //         break;
    // }


    // these variables are registerd to a new instance of the WordGame model class and saved() into the database after each game
