import React from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <header className="header">
                <nav className="header_nav_block">
                    <ul>
                        <li><Link to="/clients">CLIENTS</Link></li>
                        <li><Link to="/registration">REGISTRATION</Link></li>
                        <li><Link to="/about_me">ABOUT ME</Link></li>

                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header