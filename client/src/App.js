import React, {useEffect, useState} from 'react'
import SudokuGrid from './Components/SudokuGrid'

function App() {
  const[backendData, setBackendData] = useState([])
  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setBackendData(data))
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sudoku</h1>
      <SudokuGrid />
    </div>
  );
}

export default App;
