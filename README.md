# Simon Says Game:

This project is a browser-based memory game inspired by the classic "Simon Says" game, where the player must replicate a sequence of colors displayed by the game. Each level, the sequence grows by one color, challenging the player to remember and follow it precisely. The goal is to achieve the highest level possible before making an error.


# Table of Contents:

Game Overview
Features
How to Play
Code Structure
Installation and Usage
Future Improvements
License
Game Overview
In this Simon Says game, the player interacts with four colored buttons: red, blue, green, and yellow. The game will generate a random color sequence, which the player must replicate. Each level increases the length of the sequence by adding one random color. The player’s objective is to follow the sequence as accurately as possible to reach higher levels and achieve a new high score.


# Features :

* Dynamic Color Sequence: Each level, a new color is added to the sequence, increasing the challenge.
* User Interaction: Click-based input for an intuitive, responsive experience.
* Visual and Feedback Effects: Flashing button animations and background color feedback.
* Score Tracking: Keeps track of the highest score achieved in a session.


# How to Play:

* Start the Game: Press any key to begin a new game.
* Follow the Sequence: Watch the color sequence shown by the game and repeat it by clicking the respective buttons.
* Progress Through Levels: Each successful replication of the sequence advances the player to the next level, adding one additional color to the sequence.
* Game Over: If an incorrect color is clicked, the game ends, and the player’s score is displayed. Press any key to start a new game.


# Code Structure:

>> Global Variables:

* gameSeq: Stores the game's generated color sequence.
* userSeq: Stores the user’s input sequence.
* started: Boolean flag to indicate if the game has started.
* level: Tracks the current level.
* highest_Score: Tracks the highest level achieved.

>> Main Functions:

* levelUp(): Advances to the next level, generates a new color in the sequence, and displays it.
* checkAns(idx): Compares the user input with the game sequence; triggers the next level if correct or ends the game if incorrect.
* btnPress(): Handles button click events, adding colors to userSeq and checking the answer.
* gameFlash() and userFlash(): Provides visual feedback by flashing buttons.
* reset(): Resets the game variables to start a new game.
* highestScore(): Updates and displays the highest score achieved during the session.
* Installation and Usage


# Clone the Repository:

git clone https://github.com/your-username/simon-says-game.git


1. Open in Browser:
Navigate to the project folder and open index.html in your preferred web browser.

2. Play the Game:
Follow the instructions in How to Play to enjoy the game.


# Future Improvements:

Add sound effects for each color flash for a more immersive experience.
Create different game difficulty modes.
Implement score saving using local storage.

Created By : Abdeali Darugarhwala
