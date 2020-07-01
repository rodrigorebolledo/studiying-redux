import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOne, minusOne,restart } from './actions';

const Counter = () => {

    const containerStyle = {
        display: 'flex'
      }
      const buttonStyle = {
        fontSize: '1.5rem',
      }
      const counter = useSelector(state => state.number, );
      const gameState = useSelector(state => state.gameState, );
      const dispatch = useDispatch();
      return(
        <div className="App" >
            <header className="App-header">
            {gameState === 1 ?
            alert('Ganaste') : gameState === -1 ? alert('Perdiste') : null} 
            <h1>{counter}</h1>
            <div style={containerStyle}>
                <button type="button" onClick={() => dispatch(minusOne())} style={buttonStyle}>-</button>
                <button type="button" onClick={() => dispatch(addOne())} style={buttonStyle}>+</button>
                <button type="button" onClick={() => dispatch(restart())} style={buttonStyle}>Reiniciar contador</button>
            </div>
            </header>
        </div>
      )
};

export default Counter;