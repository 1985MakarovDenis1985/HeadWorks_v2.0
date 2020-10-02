import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setClients, showCard, hideCard, validForm, invalidForm} from "../../redux/actions/actions";
import CreditCardBox from "./CreditCardBox";
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";


export default () => {

    const clients = useSelector(state => state.clientReducer.users)
    const creditCardBox = useSelector(state => state.showCardBoxReducer.cardBox)
    const validation = useSelector(state => state.validationFormReducer.validation)
    const dispatch = useDispatch()


    useEffect(() => {
        fetch("https://meowfacts.herokuapp.com")
            .then(res => res.json())
            .then(res => document.getElementById("ajax_test").innerText = res.data)
    }, [])


    //// ----  Imitation get data from server and create new data base
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(res => dispatch(setClients(res)))
    // }, [])
    //// ----


    useEffect(() => {
        const noticeMessage = document.getElementById("notice_message");
        noticeMessage.style.animationName = "nothing"
        setTimeout(() => {
            noticeMessage.style.animationName = "notice_message_appear"
        }, 0)
        document.getElementById("firstName").value = ""
        document.getElementById("secondName").value = ""
    }, [clients.length])

    const obj = {
        id: clients.length + 1,
        firstName: "",
        secondName: "",
        sex: "man",
        loyaltyProgram: "",
        mobileApp: "",
        dateRegistration: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
        creditNumber: "",
    }
    const [person, setPerson] = useState(obj)


    //// ---- Get value of first and second names
    const changValue = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        return new Promise((res, rej) => {
            let newClient = Object.assign(person, {})
            newClient[name] = value
            setPerson(
                newClient
            )
            liteValidation()
            animationError()
            res()
        })
            .catch(err => console.error(err))
    }

    const valueCardNumber = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        const numberOfCart = Object.assign({}, person)
        numberOfCart[name] = value

        if (numberOfCart.creditNumber.length != 16) {
            numberOfCart.creditNumber = "not a valid"
        }
        setPerson(
            numberOfCart
        )
        animationErrCard(e)
    }

    //// ---- Add new client if all ok
    const addNewClient = (e) => {
        e.preventDefault();
        const errorTextInfo = document.getElementById("error_text_information")

        if (validation == true) {
            return new Promise((res, rej) => {
                dispatch(setClients(person))
                errorTextInfo.style.animationName = "main_err_text_disappear"
                res()
            }).then(() => {
                dispatch(invalidForm())
                setPerson({
                    ...obj, id: clients.length + 2
                })
                animationError()
            })
        } else {
            errorTextInfo.style.animationName = "main_err_text_appear"
        }
    }


    const showCreditCard = () => {
        const ajaxText = document.getElementById("ajax_test");
        if (!creditCardBox) {
            ajaxText.style.display = "none";
            dispatch(showCard())
        } else {
            ajaxText.style.display = "block";
            dispatch(hideCard())
        }
    }

    const liteValidation = () => {
        (person.firstName.length >= 2 && person.secondName.length >= 2) ? dispatch(validForm()) : dispatch(invalidForm())
    }

    const animationErrCard = (e) => {
        const errCreditCard = document.getElementById("err_credit_card");
        if (e.target.value.length == 16) {
            errCreditCard.style.color = "green";
            errCreditCard.innerText = "Ok"
        } else {
            errCreditCard.style.color = "red"
            errCreditCard.innerText = "length must be 16 digits"
        }
    }

    const animationError = () => {
        const {firstName, secondName} = person;
        const errName = document.getElementById("err_name");
        const errSecondName = document.getElementById("err_second_name");
        errName.style.display = "block";
        errSecondName.style.display = "block";

        if (firstName.length >= 3) {
            errName.style.animationName = "err_text_appear"
            errName.innerText = " "

        } else {
            errName.style.color = "red";
            errName.style.animationName = "err_text_appear"
            errName.innerText = "very short name..."
        }

        if (secondName.length >= 3) {
            errSecondName.style.animationName = "err_text_appear"
            errSecondName.innerText = " "

        } else {
            errSecondName.style.color = "red"
            errSecondName.style.animationName = "err_text_appear"
            errSecondName.innerText = "very short second name..."
        }
    }


    return (
        <div className="content_box content_registration_box" id="content_registration_box">

            <form
                onSubmit={addNewClient}
                id="registration_form"
                action="">

                <label htmlFor={"firstName"}>FIRST NAME <span className="err_text" id="err_name">error name</span>
                </label>
                <input
                    onChange={changValue}
                    name="firstName"
                    id="firstName"
                    type="text"/>


                <label htmlFor={"secondName"}>SECOND NAME <span className="err_text" id="err_second_name">write full name</span></label>
                <input
                    onChange={changValue}
                    name="secondName"
                    type="text"
                    id="secondName"/>


                <label htmlFor="sex">SEX <span className="err_text" id="err_sex">err_sex</span></label>
                <div className="select_box">
                    <select
                        onChange={changValue}
                        name="sex"
                        id="registration_form_option_sex">
                        <option defaultValue="man">man</option>
                        <option value="woman">woman</option>
                    </select>
                </div>

                <label htmlFor="loyaltyProgram">LOYALTY PROGRAM <span className="err_text" id="err_loyalty_program">err_loyalty_program</span></label>
                <input disabled
                       name="loyaltyProgram"
                       type="text"
                       defaultValue="not available"/>

                <label htmlFor="creditCard" style={{float: "left"}}>ADD CREDIT CARD <span
                    className="btn_show_credit_card" type="click"
                    onClick={showCreditCard}
                ><FontAwesomeIcon className="icon_credit_card" icon={faCreditCard}/>
                </span>

                </label>
                <div>
                    {creditCardBox ? <CreditCardBox valueCardNumber={valueCardNumber}/> : null}
                </div>

                <label htmlFor="mobileApp">MOBILE APPLICATION<span className="err_text" id="err_m_app">err_m_app</span></label>
                <input disabled
                       name="mobileApp"
                       type="text"
                       defaultValue="not available"/>

                <button
                    type="submit" id="btn_add_client">add client
                </button>
            </form>

            <h5 className="error_text_information" id="error_text_information">Fill in all the fields</h5>
            <h5 className="ajax_test" id="ajax_test"></h5>
            <div className="notice_message" id="notice_message">
                <p>New client has been added</p>
                <p>{`${clients.length}    clients in data base`}</p>
            </div>
        </div>
    );
}





