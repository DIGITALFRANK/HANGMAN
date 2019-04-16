from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class UserProfileInfo(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    # portfolio_site = models.URLField(blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics',blank=True)
    badgePoints = models.IntegerField
    gender = models.CharField(max_length=6, default='')
    
    def __str__(self):
        return self.user.username

    def getUserId(request):
        current_user = request.user
        if request.user.is_authenticated():
            return  current_user.id
        else:
            return "anonymous user"    
        



class WordGame(models.Model):
    userId = models.IntegerField() # foreignKey fromn User table (current user)
    difficultyLevel = models.CharField(max_length=6)
    secretWord = models.CharField(max_length=120)
    correctGuesses = models.CharField(max_length=120)
    missedGuesses = models.CharField(max_length=6)
    wordReveal = models.CharField(max_length=120)
    userWonGame = models.BooleanField(default=False)
    # timeStamp = models.TimeField

    def _str_(self):
       return self.secretWord







