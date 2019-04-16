
// Ajax setup for 403 error no POST requests from localhost

var csrftoken = $.cookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

// end Ajax setup




// save each game's results into the database, Ajax POST to views.index

var gameId = 1;
function saveWordGame() {
    var data = {
        'gameId': gameId,
        // 'userId': userId,
        'difficultyLevel': difficultyLevel,
        'secretWord': secretWord,
        'correctGuesses': correctGuesses.join(','),
        'missedGuesses': missedGuesses.join(','),
        'wordReveal': wordReveal.join(''),
        'userWonGame': (userWonGame) ? 1 : 0
    };
    $.post(gameURL, data, function(response){
        if(response === 'success') { alert('Yay! we saved your records'); }
        else{ alert('Error saving game! :('); }
    });
    gameId += 1; 
}





// update the user's badge points on win or loss, Ajax POST to views.index

function updateBadgePoints() {
    var data;
    var result = userWonGame;
    switch  (difficultyLevel) {
        case "medium":
            data = {
                'result': userWonGame, // 0 & 1 instead of true/false? won't work in python
                'win': 200,
                'loss': -200
            }
        break;
        case "hard":
            data = {
                'result': userWonGame,
                'win': 300,
                'loss': -300
            }
        break;
        default:
            data = {
                'result': userWonGame,
                'win': 100,
                'loss': -100
            }
            break;
    }

    if (result) {
        $.post(gameURL, data, function(response){
            if(response === 'success') { alert('You earned ' + data['win'] + ' badge points!!!'); }
            else{ alert('Error updating your records :('); }
        });
    } else {
        $.post(gameURL, data, function(response){
            if(response === 'success') { alert('Sorry, you lost ' + data['loss'] + ' badge points.'); }
            else{ alert('Error updating your records :('); }
        });
    }
}

