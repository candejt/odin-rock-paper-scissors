# Rock Paper Scissors - JavaScript Project

This is my implementation of the "Rock Paper Scissors" project from The Odin Project's Foundations Course. 

Project Logic (Pseudocode)
To build this game, I followed a structured logical approach:

1.Player Inputs:
   -Computer: Created a function (`getComputerChoice`) that uses `Math.random()` to generate a choice (0, 1, or 2) and maps it to "rock", "paper", or "scissors".
   -Human: (`getHumanChoice` function) Used `prompt()` to capture user input, making it case-insensitive by converting the string to lowercase.

2.Score Tracking:
  -Initialized two global variables, `humanScore` and `computerScore`, set to 0 to keep track of the game progress.

3.*Round Mechanics (`playRound` function):
   -Created a function that compares the two choices using `if...else` statements.
   -Updated the corresponding score variable based on the winner of each round.
   -Logged the result of each round to the console.

4.Game Flow (`playGame` function):
   -Wrapped the game logic in a main function.
   -Set up the game to play 5 rounds by calling the functions sequentially.

5.Final Result:
   -After 5 rounds, the code compares the final values of `humanScore` and `computerScore`.
   -Declares the ultimate winner of the match in the console.

