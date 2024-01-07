import React, { useCallback } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SudokuGrid.css'; // Asegúrate de crear este archivo CSS
import SudokuInput from './SudokuInput';

function cellStyle(index, type){
    /*
    Every third cell is a thick border
    The first cell of every row is a thick border
    */
    if(index%3===2){
        if(type==='row'){
        return {'border-bottom': '2px solid black'}
        }
        else{
        return {'border-right': '2px solid black'}
        }
    }
    else if(index===0){
        if(type==='row'){
        return {'border-top': '2px solid black'}
        }
        else{
        return {'border-left': '2px solid black'}
        }
    }
    else{
        return {}
    }
}

const SudokuGrid = () => {
  // Grid is square of 9x9 array of numbers and nulls
  const initialSudokuBoard = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, 3, null, 8, 5],
    [null, null, 1, null, 2, null, null, null, null],
    [null, null, null, 5, null, 7, null, null, null],
    [null, null, 4, null, null, null, 1, null, null],
    [null, 9, null, null, null, null, null, null, null],
    [5, null, null, null, null, null, null, 7, 3],
    [null, null, 2, null, 1, null, null, null, null],
    [null, null, null, null, 4, null, null, null, 9],
  ];
  const [sudokuBoard, setSudokuBoard] = useState(initialSudokuBoard);

  const handleSudokuBoardChange = useCallback((rowIndex, colIndex, value) => {
    const newSudokuBoard = [...sudokuBoard];
    newSudokuBoard[rowIndex][colIndex] = value;
    setSudokuBoard(newSudokuBoard);
  }, [sudokuBoard]);


  return (
    <div className="sudoku-container">
      <table className="table table-bordered sudoku-table">
        <tbody>
          {sudokuBoard.map((row, rowIndex) => (
            <tr key={rowIndex} style={cellStyle(rowIndex, 'row')} >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex} style={cellStyle(cellIndex, 'col')}
                >
                  {cell? cell: <SudokuInput handleSudokuBoardChange={handleSudokuBoardChange} rowIndex={rowIndex} cellIndex={cellIndex} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default SudokuGrid;
