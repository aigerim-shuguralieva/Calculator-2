import React, { useState } from 'react'
export const Calculator2 = () => {
    const [inputValues, setInputValues] = useState({
        input1: 2,
        input2: 2,
        
    })
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)
    const inputHandler = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value })
    }

    function calculator(){
        if(operation === "+"){
            return(setResult (parseInt(inputValues.input1) + parseInt(inputValues.input2)))
        }
        if(operation === "-"){
            return(setResult(parseInt(inputValues.input1) - parseInt(inputValues.input2)))
        }
        if(operation === "*"){
            return(setResult(parseInt(inputValues.input1) * parseInt(inputValues.input2)))
        }
        if(operation === "/"){
            return(setResult(parseInt(inputValues.input1) / parseInt(inputValues.input2)))
        }
    }

    return (
        <div>
            <h1>Calculate 2</h1>
            <input
                type="number"
                value={inputValues.input1}
                onChange={inputHandler}
                name="input1"
            />
            <input style={{width:40,backgroundColor:'beige'}} type="text"
                onChange={(e) => setOperation(e.target.value)}
                 placeholder=" +-*/"/>
                 <input
                type="number"
                value={inputValues.input2}
                onChange={inputHandler}
                name="input2"
            />
            <button  onClick={calculator}>Calculate</button>
            
           
            <h1 style={{ textAlign: 'center', width: 420 }}>sum:{ result }</h1>
        </div>
    )
}