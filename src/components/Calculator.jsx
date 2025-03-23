import React from "react";
import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider";

const Calculator = () => {
   const {currentNumber, setCurrentNumber, addNumbers, calculateSum, resetCalculator} = useCalculator()
  
   const HandleClick = (value) => {
    if(value === '='){
        calculateSum()
    }else if (value === 'C'){
        resetCalculator()
    }else {
        if (["+"].includes(value) && currentNumber === "") return;
        setCurrentNumber(currentNumber + value);
        }
    }
    return(
        <div className="App">
            <div className='calculator'>
                <div className="result">{currentNumber}</div>
                <div className="buttons">
                    <button onClick={()=> HandleClick('1')}>1</button>
                    <button onClick={()=> HandleClick('2')}>2</button>
                    <button onClick={()=> HandleClick('3')}>3</button>
                    <button onClick={()=> HandleClick('4')}>4</button>
                    <button onClick={()=> HandleClick('5')}>5</button>
                    <button onClick={()=> HandleClick('6')}>6</button>
                    <button onClick={()=> HandleClick('7')}>7</button>
                    <button onClick={()=> HandleClick('8')}>8</button>
                    <button onClick={()=> HandleClick('9')}>9</button>
                    <button onClick={()=> HandleClick('0')}>0</button>
                    <button class="operator" onClick={()=> HandleClick('+')}>+</button>
                    <button class="equal" onClick={()=> HandleClick('=')}>=</button>
                    <button class="clear" onClick={()=> HandleClick('C')}>C</button>
                </div>
                <Link to='/results'>Resultado</Link>
            </div>
        </div>
        
    )
}

export default Calculator;