import React, { useCallback, useMemo } from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SudokuGrid.css'; // Asegúrate de crear este archivo CSS
import SudokuInput from './SudokuInput';
import Confetti from './Confetti';

function cellStyle(index, type){
    /*
    Every third cell is a thick border
    The first cell of every row is a thick border
    */
    if(index%3===2){
        if(type==='row'){
        return {'borderBottom': '2px solid black'}
        }
        else{
        return {'borderRight': '2px solid black'}
        }
    }
    else if(index===0){
        if(type==='row'){
        return {'borderTop': '2px solid black'}
        }
        else{
        return {'borderLeft': '2px solid black'}
        }
    }
    else{
        return {}
    }
}

const SudokuGrid = () => {
  // Grid is square of 9x9 array of numbers and nulls
  const initialSudokuBoard = [
    [null, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 1, 7, 3, 9, 8, 5],
    [3, 5, 1, 9, 2, 8, 7, 4, 6],
    [1, 2, 8, 5, 3, 7, 6, 9, 4],
    [6, 3, 4, 8, 9, 2, 1, 5, 7],
    [7, 9, 5, 4, 6, 1, 8, 3, 2],
    [5, 1, 9, 2, 8, 6, 4, 7, 3],
    [4, 7, 2, 3, 1, 9, 5, 6, 8],
    [8, 6, 3, 7, 4, 5, 2, 1, 9],
  ];

  const solvedSudokuBoard = useMemo(() => [
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 1, 7, 3, 9, 8, 5],
    [3, 5, 1, 9, 2, 8, 7, 4, 6],
    [1, 2, 8, 5, 3, 7, 6, 9, 4],
    [6, 3, 4, 8, 9, 2, 1, 5, 7],
    [7, 9, 5, 4, 6, 1, 8, 3, 2],
    [5, 1, 9, 2, 8, 6, 4, 7, 3],
    [4, 7, 2, 3, 1, 9, 5, 6, 8],
    [8, 6, 3, 7, 4, 5, 2, 1, 9],
], []);

    
  const [sudokuBoard, setSudokuBoard] = useState(initialSudokuBoard);
  const [isSudokuBoardSolved, setIsSudokuBoardSolved] = useState(false);

  const isSudokuBoardCorrect= useCallback(() => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (parseInt(sudokuBoard[i][j]) !== parseInt(solvedSudokuBoard[i][j])) {
          console.log('Incorrect value at row ' + i + ' and column ' + j);
          return;
        }
      }
    }
    setIsSudokuBoardSolved(true);
  },[sudokuBoard, solvedSudokuBoard, setIsSudokuBoardSolved]);

  const handleSudokuBoardChange = useCallback((rowIndex, colIndex, value) => {
    const newSudokuBoard = [...sudokuBoard];
    newSudokuBoard[rowIndex][colIndex] = value;
    setSudokuBoard(newSudokuBoard);

    isSudokuBoardCorrect();
  }, [sudokuBoard, isSudokuBoardCorrect]);

  return (
    <>
    { isSudokuBoardSolved &&
      <Confetti />}
    <div className="sudoku-container">
      <table className="table table-bordered sudoku-table">
        <tbody>
          {sudokuBoard.map((row, rowIndex) => (
            <tr key={rowIndex} style={cellStyle(rowIndex, 'row')} >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex} style={cellStyle(cellIndex, 'col')}
                >
                  {cell? cell: <SudokuInput handleSudokuBoardChange={handleSudokuBoardChange} rowIndex={rowIndex} cellIndex={cellIndex} correctValue={solvedSudokuBoard[rowIndex][cellIndex]} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>       
  );
  
};

export default SudokuGrid;
