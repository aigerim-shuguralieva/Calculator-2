import React from 'react'

export class Calculator1 extends React.Component {

    constructor() {
        super()
        this.state = {
            inputValue1: 1,
            inputValue2: 1,
            result: 0
        }
    }

     inputHandler = (e) =>{
         this.setState(() => ({[e.target.name]: parseInt(e.target.value)}))
    }
    
    onPlus = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2)}))
    }
    onMinus = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) - parseInt(this.state.inputValue2)}))
    }
    onMult = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) * parseInt(this.state.inputValue2)}))
    }
    onDivis = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) / parseInt(this.state.inputValue2)}))
    }
    render() {
        return <div>
            <h1>Calculate 1</h1>
            <input 
            type="number" 
            value={this.state.inputValue1}
             onChange={this.inputHandler}
             name="inputValue1"/>
            <button onClick={this.onPlus}>+</button>
            <button onClick={this.onMinus}>-</button>
            <button onClick={this.onMult}>*</button>
            <button onClick={this.onDivis}>/</button>
            <input type="number"
            value={this.state.inputValue2} 
            onChange={this.inputHandler}
            name="inputValue2"/>
            <h1 style={{textAlign: 'center', width: 420}}>sum:{this.state.result}</h1>
            </div>
    }
}
