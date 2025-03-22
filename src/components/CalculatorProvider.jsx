import React, { createContext, useContext, useState } from 'react';
const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {

    const [numbers, setNumbers]= useState([]);
    const [currentNumber, setCurrentNumber]= useState('') 

    const addNumbers = (number) => {
        setCurrentNumber(currentNumber + number)

    }

    const calculateSum = () => {
        try {
            let result = 0;
            let showNumber = "";
    
            for (let char of currentNumber) {
                if (char === "+") {
                    result += parseFloat(showNumber);
                    showNumber = ""; 
                } else {
                    showNumber += char;
                }
            }
    
            result += parseFloat(showNumber);
            setCurrentNumber(result.toString());
        } catch (error) {
            setCurrentNumber("Error");
        }
    };
    

    const resetCalculator = () => {
      setNumbers([]);
      setCurrentNumber('');
  }


  return (
    <CalculatorContext.Provider value={{numbers, currentNumber, setCurrentNumber, addNumbers, calculateSum, resetCalculator}}>
        {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => useContext(CalculatorContext)