import React, { useCallback, useEffect } from 'react';
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

const SudokuGrid = ({board, solution}) => {
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [isSudokuBoardSolved, setIsSudokuBoardSolved] = useState(false);

  useEffect(() => {
    setSudokuBoard(board);
  }, [board]);

  const isSudokuBoardCorrect= useCallback(() => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (parseInt(sudokuBoard[i][j]) !== parseInt(solution[i][j])) {
          console.log('Incorrect value at row ' + i + ' and column ' + j);
          return;
        }
      }
    }
    setIsSudokuBoardSolved(true);
  },[sudokuBoard, solution, setIsSudokuBoardSolved]);

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
                  {cell? cell: <SudokuInput handleSudokuBoardChange={handleSudokuBoardChange} rowIndex={rowIndex} cellIndex={cellIndex} correctValue={solution[rowIndex][cellIndex]} />}
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
