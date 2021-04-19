import * as types from '../constants/ActionType';
import * as Message from '../constants/Message';

var initialState = Message.MSG_WELCOME

const message =(state=initialState, action)=>{
    switch(action.types){
        case types.CHANGE_MASSAGE :
            return action.message
        default : return [...state];
    }
}

export default message;