import {createStore, applyMiddleware} from 'redux';
import  rootReducer from '../reducer/RootReducer';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const createLogger = require('redux-logger');
/** 在开发者模式下开启打印日志功能**/
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    //redux 日志打印
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
/**创建configureStore方法，开辟一块空地store，同时把树rootReducer种植进去，initialState为初始状态**/
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}