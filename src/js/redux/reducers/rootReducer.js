import {combineReducers} from "redux";
import {clientReducer} from "./clientsReducer";
import {showCardBoxReducer} from "./showCaedReducer";
import {validationFormReducer} from "./validationFormReducer";

export const rootReducer = combineReducers({
    clientReducer,
    showCardBoxReducer,
    validationFormReducer
})