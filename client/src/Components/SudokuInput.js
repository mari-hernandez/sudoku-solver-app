const SudokuInput = ({handleSudokuBoardChange, rowIndex, cellIndex, correctValue=null}) => {
    const inputStyle = {
        width: '30px', 
        height: '30px',
        textAlign: 'center',
        border: 'none',
      };
    
    const handleInputChange = (e) => {
        e.target.style.color = 'black';
        const inputValue = e.target.value;
        
        // Validate input value, only allow numbers between 1 and 9
        if (!/^[1-9]$/.test(inputValue) || inputValue === '') {
            e.target.value = '';
        }
        // If input values is incorrect, change color to red
        else if(parseInt(inputValue) !== correctValue){
            e.target.style.color = 'red';
        }
        // If value is correct, handle change
        else{
            handleSudokuBoardChange(rowIndex, cellIndex, inputValue);
        }
    };

    return (
        <div className="sudoku-input">
            <input
            type="text"
            maxLength="1"
            style={inputStyle}
            onChange={handleInputChange} />
        </div>
    );
}

export default SudokuInput;