from django.db import models

# Create your models here.


# wordGame
# - userId 
# - secretWord (str)
# - revealedWord (str)
# - missedGuesses ({1:a, 2:b ...})


class WordGame(models.Model):
    secretWord = models.CharField(max_length=120)
    wordReveal = models.CharField(max_length=120)
    userWonGame = models.BooleanField(default=False)
    missedGuesses = models.CharField(max_length=6)
    userId = models.IntegerField() # foreignKey fromn User table (current user)

    # def _str_(self):
    #    return self.secretWord

    # @classmethod
    # def start(cls, newWord):
    #     secretWord = cls(title=title)
    #     # do something with the book
    #     return book

    #     # game = WordGame.start(newWord)



# @classmethod
#     def create(cls, title):
#         book = cls(title=title)
#         # do something with the book
#         return book

# book = Book.create("Pride and Prejudice")


    def resetReveal():
        for i, c in enumerate('secretWord'):
            wordReveal[i] = "_"
            return wordReveal


    def fetchWord():
        word = "" # LinkedIn API call 
        return word


    # def guess(letterInput):
    #     for i, c in enumerate('secretWord'):
    #         if c == letterInput:
    #             wordReveal[i] = letterInput
    #             # FrontEnd alert "good guess!"
    #         else:
    #             # FrontEnd alert f'{upper(letterInput} is not in the secret word!'
    #             WordGame.missedGuesses.append(letterInput)
    #             if len(missedGuesses == 1):
    #                 # FrontEnd noose animation
    #                 elif len(missedGuesses == 2):
    #                 # FrontEnd head animation
    #                 elif len(missedGuesses == 3):
    #                 # FrontEnd torso animation
    #                 elif len(missedGuesses == 4):
    #                 # FrontEnd arms animation
    #                 elif len(missedGuesses == 5):
    #                 # FrontEnd left leg animation
    #                 elif len(missedGuesses == 6):
    #                     # FrontEnd right leg animation
    #                     # FrontEnd alert "you've lost"
    #                     # FrontEnd button choice start new game / logout

    def showMisses():
        for c in missedGuesses:
            return c # pass to FrontEnd


    def guessWholeWord(wordInput):
        if wordInput == secretWord:
            userWonGame = True
        else:
            # FrontEnd alert f'{wordInput} is not the secret word!'
            WordGame.missedGuesses.append('*')
            # FrontEnd hangman animation 


    def startGame():
        game = WordGame(fetchWord(), resetReveal(), False, '', currentUser)
        # FrontEnd animation prompting user to guess letter
        guess() # user input letter as arg / guess up to 6 times

        # if len(missedGuesses) < 5:    did this in guess()
            # FrontEnd alert "you've lost"

        # if user decides to guess whold word
            # guessWholeWord() user input as word arg








