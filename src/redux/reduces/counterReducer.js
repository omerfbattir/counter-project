import * as actionTyoes from '../actions/actionTypes';

const counterReducer = (state = 1, action) => {
    let newState;
    switch (action.type) {
        case actionTyoes.INCREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTyoes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
        case actionTyoes.DECREASE_COUNTER:
            return (newState = state + action.payload);
        default:
            return state;
    }
}

export default counterReducer;