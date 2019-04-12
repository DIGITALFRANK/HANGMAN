
function saveWordGame() {
    var data = {
        'userId': userId,
        'difficultyLevel': difficultyLevel,
        'secretWord': secretWord,
        'correctGuesses': correctGuesses.join(','),
        'missedGuesses': missedGuesses.join(','),
        'wordReveal': wordReveal.join(''),
        'userWonGame': userWonGame
    };
    $.post(gameURL, data, function(response){
        if(response === 'success') { alert('Yay! we saved your records'); }
        else{ alert('Error saving game! :('); }
    });
}



function updateBadgePoints() {
    var data;
    switch  (difficultyLevel) {
        case medium:
            data = {
                'win': 200,
                'loss': -200
            }
        break;
        case hard:
            data = {
                'win': 300,
                'loss': -300
            }
        break;
        default:
            data = {
                'win': 100,
                'loss': -100
            }
            break;
    }

    if (userWonGame == true) {
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

