import {SHOW_CARD, HIDE_CARD} from "../types";


const initiallyState = {
    cardBox: false
}

export const showCardBoxReducer = (state = initiallyState, action) => {
    switch (action.type){
        case SHOW_CARD :
            return {cardBox: true}
        case HIDE_CARD :
            return {cardBox: false}
        default:
            return state

    }
}

