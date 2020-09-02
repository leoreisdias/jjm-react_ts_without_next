import React from 'react';

import logoImg from '../../assets/images/logo.png'
import { PacmanLoader } from 'react-spinners';

import studyIcon from '../../assets/images/icons/study.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    {/* <img src={logoImg} alt="JJM" /> */}
                    <h2>Estamos em Manutenção <br /> Retornaremos o mais rápido possível</h2>
                </div>

                {/* <div className="buttons-container">
                    <a href="/dashboard" className="study">
                        <img src={studyIcon} alt="Acessar" />
                        Acessar
                    </a>
                </div>

                <span className="total-connections">
                    O seu site de informações de Muzambinho e Região <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span> */}
                <PacmanLoader size={100} color={"yellow"} />

            </div>
        </div>
    )
}

export default Landing;