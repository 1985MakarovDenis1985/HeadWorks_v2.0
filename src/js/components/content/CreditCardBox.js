import React from 'react';
import PropTypes from "prop-types"



export default function CreditCardBox ({valueCardNumber}) {


        return (
            <div>
                <div className="credit_card_box">
                    <input

                        onChange={valueCardNumber}
                        // value={this.state.person.creditNumber}
                        className="credit_card_box_input"
                        name="creditNumber"
                        type="number"/>
                </div>
                <div style={{float: "right"}}
                    className="err_text" id="err_credit_card">
                    card must have 16 digits
                </div>
            </div>

        )
}

CreditCardBox.propTypes = {
    fun : PropTypes.func
}

