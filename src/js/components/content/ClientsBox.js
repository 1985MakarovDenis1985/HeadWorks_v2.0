import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";





export default  () => {

    const clients = useSelector(state => state.clientReducer.users)
    const arrClients = [...clients]

        return (
            <div className="content_box content_clients_box">
                <div className="content_box_clients_box">
                    {arrClients.reverse().map((el) => (
                        <div className="content_box_user_box" key={el.id}>
                            <p> Name: <span>{el.firstName}  {el.secondName}</span></p>
                            <p> Date of registration: <span>{el.dateRegistration}</span></p>
                        </div>
                    ))}
                </div>

                <div className="content_box_btn_registration">
                    <div className="btn_to_registration"  style={{fontSize: "50px"}}>
                        <Link to="/registration"><span>Registration</span></Link>
                    </div>
                </div>
            </div>
        );

}

