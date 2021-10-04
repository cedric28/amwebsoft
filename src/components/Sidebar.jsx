import React from "react";
import { PUBLIC_LINKS as links } from "../utils/routes";

const Sidebar = (props)  => {
    const { match } = props; 
    let url;
    if(match !== undefined){
        url = match.url;
    }
    return (
    <div>
        <div className="side-menu opacity-0 gradient-bg">
            <div className="overlay"></div>
            <div className="inner-wrapper">
                <span className="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
                <nav className="side-nav w-100">
                    <ul className="navbar-nav">
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
                </nav>
                <div className="side-footer w-100">
                    <ul className="social-icons-simple white top40">
                        <li><a href="https://www.facebook.com/amwebsoft"><i className="fab fa-facebook-f"></i> </a> </li>
                        <li><a href="https://twitter.com/amwebsoft"><i className="fab fa-twitter"></i> </a> </li>
                        <li><a href="#"><i className="fab fa-instagram"></i> </a> </li>
                    </ul>
                    <p className="whitecolor">&copy; <span id="year"></span> AMWebsoft.com</p>
                </div>
            </div>
        </div>
        <div id="close_side_menu" className="tooltip"></div>
    </div>
    );
}

export default Sidebar;