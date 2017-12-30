import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducers from './auto/reducers';
import thunk from 'redux-thunk';

let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        combineReducers(reducers),
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        combineReducers(reducers),
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //������ԣ�δ��װ�ᱨ��
    );
}

export default store;