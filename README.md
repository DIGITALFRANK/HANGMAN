# HANGMAN

This app is a word-guessing game the user can play against the computer.

Using a dictionary API, a random word is selected and the user has up to six letter guesses to figure out the word.
With each guess, either all occurences of the letter in the word are revealed, or the user loses a guess and the wrongly-guessed letter is displayed for future reference.  The user also has the option of guessing the entire word for bonus points.

With each win (correct guess of a full word within the 6-letter guess limit), users earn badge points and can compete with other users
The game can be played at different dificulty levels, and users reach various player levels based on the number of badge points they earn.
Losses (reaching the 6-letter guess limit without success, or incorrect guesses of a full word) carry badge point penalties.

Users have a personalized profile page that they can view and edit, which displays their info, badge points, and player level.
There is also a analytics dashboard that displays information about all users and the state of the game as a whole, allowing users to see their ranking and rate their performance



This full stack Single Page Application (SPA) is built using the Django framework, with React as a front-end using the Django REST Framework (DRF).  Bootstrap and Sass are used for styling, jQuery for added interactivity.  MySQL is the choice of database.  the application uses Asynchronus Javascript and XML (AJAX) for added performance and the browser does not reload while users are engaged, allowing for a seamless gaming experience.



