import {ADD_CLIENT, HIDE_CARD, SHOW_CARD, VALID_FORM, INVALID_FORM} from "../types";

export function setClients(users){
    return {
        type: ADD_CLIENT,
        payload: users
    }
}

export function showCard(){
    return {
        type: SHOW_CARD
    }
}

export function hideCard(){
    return {
        type: HIDE_CARD
    }
}

export function validForm(){
    return {
        type: VALID_FORM
    }
}

export function invalidForm(){
    return {
        type: INVALID_FORM
    }
}