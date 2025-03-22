import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider";

const Result = () => {
    const {currentNumber} = useCalculator()


    return(
       <div className='result'>
        <h1>Resultado: {currentNumber} </h1>
        <Link to='/'>Calculadora</Link>
       </div>

    )
}

export default Result