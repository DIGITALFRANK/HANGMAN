
from django.shortcuts import render
from game.forms import UserForm,UserProfileInfoForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required

from django.db import models
from django.contrib.auth import views




def index(request):
    if request.method == 'POST':
        if all (key in request.POST for key in ('userId', 'difficultyLevel', 'secretWord', 'correctGuesses', 'missedGuesses', 'wordReveal', 'userWonGame')):
            userId = request.POST['userId']
            difficultyLevel = request.POST['difficultyLevel']
            secretWord = request.POST['secretWord']
            correctGuesses = request.POST['correctGuesses']
            missedGuesses = request.POST['missedGuesses']
            wordReveal = request.POST['wordReveal']
            userWonGame = request.POST['userWonGame']

            # create & save new instance of WordGame for database records
            WordGame(userId, difficultyLevel, secretWord, correctGuesses, missedGuesses, wordReveal, userWonGame).save()
            return HttpResponse('success') # game records were successfully saved
        else:
            return HttpResponse('fail') # Javascript handles the alert

        if all (key in request.POST for key in ('win', 'loss')):
            return HttpResponse('success') # user badge points successfully updated
        else:
            return HttpResponse('fail') # Javascript handles the alert 
    return render(request,'index.html')


@login_required
def special(request):
    return HttpResponse("You are logged in !")


@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('user_login'))


def register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileInfoForm(data=request.POST)
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            if 'profile_pic' in request.FILES:
                print('found it')
                profile.profile_pic = request.FILES['profile_pic']
            profile.save()
            registered = True

            # log user in
            login(request,user)
            return HttpResponseRedirect(reverse('index'))

        else:
            print(user_form.errors,profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileInfoForm()
    return render(request,'registration.html',
                          {'user_form':user_form,
                           'profile_form':profile_form,
                           'registered':registered})


def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return HttpResponse("Your account was inactive.")
        else:
            print("Someone tried to login and failed.")
            print("They used username: {} and password: {}".format(username,password))
            return HttpResponse("Invalid login details given")
    else:
        return render(request, 'login.html', {})










