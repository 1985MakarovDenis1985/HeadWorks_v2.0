import {INVALID_FORM, VALID_FORM} from "../types";


const initiallyState = {
    validation: false
}

export const validationFormReducer = (state = initiallyState, action) => {
    switch (action.type){
        case VALID_FORM :
            return {validation : true}
        case INVALID_FORM :
            return {validation : false}
        default : return state

    }
}