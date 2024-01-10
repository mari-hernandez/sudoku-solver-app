import axios from 'axios';

export const getSudokus = async () => {
  try {
    const response = await axios.get('http://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution}}}');

    const sudokuBoard = response.data.newboard.grids[0].value;
    const solvedSudokuBoard = response.data.newboard.grids[0].solution;

    const parsedSudokuBoard = sudokuBoard.map(row => row.map(cell => {if (cell === 0) { return null; } else { return cell;}}));

    return { parsedSudokuBoard, solvedSudokuBoard };
  } catch (error) {
    console.error(error);
  }
};