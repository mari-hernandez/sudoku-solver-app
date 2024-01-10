import React, { useCallback, useEffect } from 'react'
import SudokuGrid from './Components/SudokuGrid'
import { useState } from 'react';
import { getSudokus } from './API/getSudokus';


function App() {
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solvedSudokuBoard, setSolvedSudokuBoard] = useState([]);
  
  const fetchData = useCallback(async()=> {
    try {
      const { parsedSudokuBoard, solvedSudokuBoard } = await getSudokus();
      
      setSudokuBoard(parsedSudokuBoard);
      setSolvedSudokuBoard(solvedSudokuBoard);

    } catch (error) {
      console.error(error);
    }
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sudoku</h1>
      <SudokuGrid board={sudokuBoard} solution={solvedSudokuBoard}/>
      <button className="btn btn-primary" onClick={fetchData}>New Sudoku</button>
    </div>
  );
}

export default App;
