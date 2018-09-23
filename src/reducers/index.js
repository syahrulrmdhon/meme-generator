import { combineReducers } from 'redux';
import { RECIVE_MEMES } from '../actions';

function memes(state = [], action) {
    switch(action.type) {
        case RECIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ memes });

export default rootReducer;