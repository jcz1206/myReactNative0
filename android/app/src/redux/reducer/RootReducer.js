import { combineReducers } from 'redux';
import IndexReducer from './IndexReducer';
const RootReducer = combineReducers({
    IndexReducer,
   /** 添加其他自己定义好的reducer **/
});
export default RootReducer;