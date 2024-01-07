# sudoku-solver-app

## Description:
This project features a Sudoku application that consists of two main components:

### 1. Interactive Game Interface:

- Users can engage with a user-friendly interface to play Sudoku.
- The interface allows users to input numbers in the appropriate spaces, representing the missing values in the puzzle.
- Incorrect entries are highlighted in red, providing immediate feedback, and users can make additional attempts.

### 2. Automated Solver:

- The application includes an automated Sudoku solver capable of accepting an initial Sudoku board at any point.
- Users can provide the solver with a partially filled Sudoku board, and it will complete the solution step by step, demonstrating the logical reasoning behind each move.

## Instructions:
To run the Sudoku application, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/your-username/sudoku-project.git
```

2. Run server:

```bash
cd server
npm i nodemon -D
npm run start
```

3. Run client:

```bash
cd client
npm install
npm start
```

4. Interact with the Game:

- Use the provided interface to play Sudoku interactively.
- Input numbers in empty cells, and observe immediate feedback for correctness.

5. Provide Initial Board to Solver:

- At any point during the game, you can choose to hand over the puzzle to the automated solver.
- The solver will continue from the current state and complete the solution, showcasing each step.


Feel free to customize and enhance the project as needed. Happy Sudoku solving!