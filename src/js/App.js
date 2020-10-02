import React from 'react';
import {HashRouter} from "react-router-dom";

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

//----------------------------

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <div className="main_container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </HashRouter>

        );
    }
}

export default App;


