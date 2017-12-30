import * as types from '../constant/ActionTypes';
//数量加
export function add() {
    return {
        type: types.INDEX_ADD
    }
}
//数量减
export function del() {
    return {
        type: types.INDEX_DEL
    }
}