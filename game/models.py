from django.db import models

# Create your models here.



class WordGame(models.Model):
    secretWord = models.CharField(max_length=120)
    wordReveal = models.CharField(max_length=120)
    userWonGame = models.BooleanField(default=False)
    missedGuesses = models.CharField(max_length=6)
    difficultyLevel = models.CharField(max_length=6)
    userId = models.IntegerField() # foreignKey fromn User table (current user)

    # def _str_(self):
    #    return self.secretWord







