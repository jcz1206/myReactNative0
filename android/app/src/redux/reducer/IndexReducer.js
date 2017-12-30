import * as types from '../constant/ActionTypes';

const initialState = {
    sum:0
};
export default function IndexReducer(state = initialState, action = {}) {
    switch (action.type){
        case types.INDEX_ADD:
            return {
                ...state,
                sum:state.sum+1
            };
            break;
        case types.INDEX_DEL:
            return {
                ...state,
                sum:state.sum-1
            };
            break;
        case types.INDEX_INIT:
            return {
                ...state,
                sum:action.param!=undefined
            };
            break;
        default:
            return state;
    }
}