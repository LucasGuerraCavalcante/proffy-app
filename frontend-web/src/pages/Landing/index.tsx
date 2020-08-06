import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="ProffyLogo"></img>
                    <h2>Distance Education Plataform</h2>
                </div>
                <img src={LandingImg} alt="HeroImg" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="studyIcon"/>
                        Study
                    </Link>

                    <Link to="/teach" className="give-classes">
                        <img src={teachIcon} alt="teachIcon"/>
                        Teach
                    </Link>
                </div>

                <span className="total-connections">
                    Users {totalConnections} <img src={purpleHeartIcon} alt="purpleHeartIcon" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
