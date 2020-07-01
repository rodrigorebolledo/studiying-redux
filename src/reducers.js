const initialState = {
    number: 0,
    gameState: 0 //0 significa normal, 1 significa que ganaste y -1 que perdiste
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_ONE':
            if(state.number >= 10){
                return {
                    number: state.number,
                    gameState: 1
                }
            }else {
                return {
                    number: state.number + 1,
                    gameState: 0
                    
                }
            }
        case 'MINUS_ONE':
            if(state.number <= -1){
                return {
                    number: state.number,
                    gameState: -1
                }
            }else {
                return {
                    number: state.number - 1,
                    gameState: 0
                }
            }
        case 'RESTART':
            return {
                number: 0,
                gameState: 0
            }
        default:
            return state;
    }

}

export default reducer;