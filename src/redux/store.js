import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import infoReducer from "./reducers/infoReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    info: infoReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
