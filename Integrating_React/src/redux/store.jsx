import todoReducer from "./todoReducer";
import {legacy_createStore , combineReducers} from "redux"

const rootReducer = combineReducers({
    tasks:todoReducer
})

const store=legacy_createStore(rootReducer)

export default store;