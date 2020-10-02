import {ADD_CLIENT} from "../types"

const initiallyState = {
    users:
        [
            {
                id: 1,
                firstName: "Leanne",
                secondName: "Graham",
                sex: "",
                loyaltyProgram: "",
                mobileApp: "",
                dateRegistration: "12.05.2014",
                creditCard: {
                    number: "",
                    date: "",
                    cv: ""
                }
            }, {
            id: 2,
            firstName: "Ervin",
            secondName: "Howell",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "01.01.2013",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        }, {
            id: 3,
            firstName: "Clementine",
            secondName: "Bauch",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "08.07.2019",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        }, {
            id: 4,
            firstName: "Patricia",
            secondName: "Lebsack",
            sex: "",
            loyaltyProgram: "",
            dateRegistration: "21.09.2019",
            mobileApp: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        }, {
            id: 5,
            firstName: "Chelsey",
            secondName: "Dietrich",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "23.03.2020",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        }

        ]
}

export const clientReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case ADD_CLIENT :
            return {...state, users: state.users.concat(action.payload)}
        default :
            return state
    }
}
