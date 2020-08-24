import React from 'react';


import './styles.css'

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import Partners from '../../components/Partners';

import 'semantic-ui-css/semantic.min.css'
import MyMenu from '../../components/MyMenu';
import { FaBars } from 'react-icons/fa';
import { FcNews } from 'react-icons/fc';
import { GiGamepad, GiDeadWood, GiSoccerBall } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Options() {
    const [visible, setVisible] = React.useState(false)


    function handleSidebar() {
        if (visible === false)
            setVisible(true);
        else
            setVisible(false)
    }

    return (
        <div id="page-options" className="container">
            <PageHeader
                title={`Olá, ${localStorage.getItem('name')}`}
                backLink="/dashboard"
            >
                <form id="search-popnewsdetail" >
                    <div
                        className="openSidebar">
                        <p></p>
                        <p></p>
                        <FaBars color="white" size={50} onClick={handleSidebar} />
                    </div>
                    <p></p>

                </form>
            </PageHeader>



            <MyMenu flag={visible}>
                <div className="optionsMain">
                    <div className="sidebarClick" onMouseOver={handleSidebar}>

                    </div>
                    <main>
                        <div className="optionsGrid">
                            <Link to="/news-post">
                                <div className="optionNews">
                                    <FcNews size={30} />
                                    <h1>Notícias</h1>
                                </div>
                            </Link>

                            <Link to="/popnews-post">
                                <div className="optionPopNews">
                                    <GiGamepad size={35} color="black" />
                                    <h1>Mundo POP</h1>
                                </div>
                            </Link>

                            <Link to="/sports-post">
                                <div className="optionSport">
                                    <GiSoccerBall size={30} color="#E2F0F9" />
                                    <h1>Esportes</h1>
                                </div>
                            </Link>

                            <Link to="/report-post">
                                <div className="optionReport">
                                    <GiDeadWood size={30} color="black" />
                                    <h1>Notas de Falecimento</h1>
                                </div>
                            </Link>

                        </div>

                    </main>

                </div>


            </MyMenu>



            <Partners />

            <PageFooter />
        </div>
    )
}

export default Options;