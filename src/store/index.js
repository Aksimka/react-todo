import {createStore} from 'redux'
import rootReducer from "./reducer";
import initialState from "./initialState";


const store = createStore(rootReducer, initialState);

export default store;