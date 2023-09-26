import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from 'redux';
import App from "./App"
import {createStore} from 'redux';
import roodReducer from "./modules";

const store = createStore(rootReducer);

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});


export default rootReducer;