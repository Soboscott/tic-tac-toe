# [Lauren's first game](https://laurpaik.github.io/tic-tac-toe/)

# Technologies Used
  - JavaScript
  - HTML
  - CSS
  - AJAX

# My journey with Tic Tac Toe

# Planning
  My plan for this project was fairly simple-- organize my thoughts and start from the beginning of what we've learned. I guess my reasoning was that the project would cover, at the bare minimum, everything our consultants have trained us to do, so a lot of times when I didn't know how to get past a problem, I would look at a lab that did the most similar thing. The project also came with a suggested schedule, so I wanted to follow that for organizational reasons. I had absolutely no intention of touching the HTML/CSS aspects of the project until I was done with my engine. In retrospect, I approached this project as I would a race-- start off strong with code I knew well, taper down to trial and error coding to keep my pace going strong without getting discouraged, go strong again when I hit a milestone, repeat until the final stretch when I give it all I have.

# Starting Over
  After a day of writing code that mimicked my logic for the game, Jeff pointed out how helpful it is to play the game multiple times and question why I move a certain way and translate that reasoning to a computer. For example, I needed to remember that the computer won't know not to take a used space unless I tell it not to. With that in mind, I started my project over with definitions-- defining a board, what being a winner means, what it means if a spot is taken, etc.
# Adventures with node
  I spent pretty much all of Wednesday and Thursday on node. Once I was able to show that the computer knew to switch between players and could define a winner, I moved on to making it so I could specify where in the array I wanted to move. Anytime I needed to be more specific, I added a definition, e.g. "spotTaken" determines if I can't overwrite a spot. Once I could play against myself in node, I added light visuals to work with AJAX.
# AJAX
  I learned a lot more about AJAX while figuring out how to make the code we did in class cater to my game. Reading the documentation was crucial in my understanding, as was asking for help from other people in my cohort. I realized that for anything to work, I had to be able to point the methods towards the code I wanted them to recognize. The API documentation told me exactly what it was looking for, so in the end it turned out making sure all paths to the game results were clear was key. The main advice I got from people in my cohort was to think like a computer and ask what references like "data.game" really means to it. I used a mixture of the auth and book labs as references for my game--while the books lab helped me understand what my game was looking for, the auth lab helped me realize I couldn't accomplish that without storing the game data as it was created.
# Unsolved problems
  I definitely hit some walls but for the most part the program does what I want. I want to play around and see if I can get it to visually display a list of old arrays in a user with my "GET" function, but for the time being I just have the game displaying how many times a user has played. I also would like it to be able to tell me how many times a user has finished a game. I know I have to point it to "over === true", but for right now I can point it to "over" and it will visually say true or false. I also want to make it look better, specifically make it so that I can shrink the screen and the boxes would still line up.

# [Wireframe] (http://imgur.com/8p4uFiM)
# User Stories:
  - As a user, I can create a new account with a password to save my wins/losses record.
  - As a user, I can log in to add to my record.
  - As a user, I can change my password if I get tired of it.
  - As a user, I can play tic tac toe.
  - As a user, I can log out.
