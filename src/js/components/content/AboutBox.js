import React from 'react';


class AboutBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="content_box content_about_box">
                <div className="about_box_img">
                    <div className="img_first_round"></div>
                </div>

                <div className="about_box_info">
                    <h4>About me</h4>
                    <h5>Hello! My name is Denis!<br/>
                        I am a very motivated and cheerful person. I really like to travel and discover new horizons for
                        myself. He went in for sports at a professional level. Recently, due to the current
                        circumstances, I had to change the profession which I gave 10 years of my life, but having
                        plunged into the world of IT, I realized that this is probably what I would like to associate my
                        future with and do not regret at all that I chose this direction. I really appreciate in people
                        the responsibility and desire to go only ahead.
                    </h5>
                    <h4>Skills:</h4>
                    <h5>
                        - Javascript, HTML5, CSS3, ES6<br/>
                        - React, Redux, Bootstrap<br/>
                        - SASS, SCSS<br/>
                        - Webpack, Git, Photoshop/GIMP<br/>
                        - Adaptive and cross-browser layout - Node.js - in progress
                    </h5>
                    <h4>Portfolio:</h4>
                    <h5>
                        <a href="http://cv-makarovdenys.com">cv-makarovdenys.com</a>
                    </h5>
                    <h4>Education:</h4>
                    <h5>- Programming courses in «IMT Academy» (https://imt.academy): front-end javascript
                        developer<br/>
                        - Programming courses in «Real IT»: Html, css, bootstrap<br/>
                        - master`s degree of social sciences
                    </h5>
                    <h4>English:</h4>
                    <h5>- IELTS 5.5 band, certificate 2019</h5>
                    <h4>Achievements:</h4>
                    <h5>- developed a library of slider that is sold on www.codester.com ( <a
                        href="http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html">http://
                        www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html</a> )
                    </h5>


                </div>
            </div>
        );
    }
}

export default AboutBox