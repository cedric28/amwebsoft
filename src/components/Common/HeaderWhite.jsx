import React from 'react';

import Sidebar from '../Sidebar';
import Loader from "../Loader";
import { PUBLIC_LINKS as links } from "../../utils/routes";

function HeaderWhite(props){
    const { match } = props; 
    let url;
    if(match !== undefined){
        url = match.url;
    }
    return(
        <>
            <Loader />
            <header className="site-header">
                <nav className="navbar navbar-expand-lg padding-nav static-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="assets/images/logo.png" alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto me-auto">
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
                        <ul className="social-icons social-icons-simple d-lg-inline-block d-none animated fadeInUp" data-wow-delay="300ms">
                            <li><a href="https://www.facebook.com/amwebsoft"><i className="fab fa-facebook-f"></i> </a> </li>
                            <li><a href="https://twitter.com/amwebsoft"><i className="fab fa-twitter"></i> </a> </li>
                            <li><a href="https://www.linkedin.com/company/74891134/admin/"><i className="fab fa-linkedin-in"></i> </a> </li>
                        </ul>
                    </div>
                    <a href="#" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                        <span className="gradient-bg"></span> <span className="gradient-bg"></span> <span className="gradient-bg"></span>
                    </a>
                </nav>
                <Sidebar {...props} />
            </header>
        </>
    );
}

export default HeaderWhite;