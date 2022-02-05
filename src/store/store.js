import {combineReducers, compose, createStore} from "redux";
import {brandReducer, catalogReducer, techReducer} from "./catalogReducer";
import {userReducer} from "./userReducer";


const rootReducer = combineReducers({
    catalog: catalogReducer,
    user: userReducer,
})

export const store = createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))