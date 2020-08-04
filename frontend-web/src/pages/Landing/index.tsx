import React from 'react';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="ProffyLogo"></img>
                    <h2>Distance Education Plataform</h2>
                </div>
                <img src={LandingImg} alt="HeroImg" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="studyIcon"/>
                        Study
                    </a>

                    <a href="" className="give-classes">
                        <img src={teachIcon} alt="teachIcon"/>
                        Teach
                    </a>
                </div>

                <span className="total-connections">
                    Users x <img src={purpleHeartIcon} alt="purpleHeartIcon" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
