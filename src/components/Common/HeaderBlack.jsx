import React from 'react';
import { PUBLIC_LINKS as links } from "../../utils/routes";
import Loader from "../Loader";
import Sidebar from '../Sidebar';

function HeaderBlack(props){
    const { match } = props; 
    let url;
    if(match !== undefined){
        url = match.url;
    }
    return(
        <>
            <Loader/>
            <header className="site-header" id="header">
                <nav className="navbar navbar-expand-lg transparent-bg static-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="assets/images/logo-transparent.png" alt="logo" className="logo-default"/>
                            <img src="assets/images/logo.png" alt="logo" className="logo-scrolled" />
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                {
                                    links.map(({ key, path, location }) => (
                                        <React.Fragment>
                                            <li className="nav-item" key={key}>
                                                <a className={url === path ? 'nav-link active' : 'nav-link'} href={path}>{location}</a>
                                            </li>
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                        <span></span> <span></span> <span></span>
                    </a>
                </nav>
                <Sidebar />
            </header>
        </>
    );
}

export default HeaderBlack;