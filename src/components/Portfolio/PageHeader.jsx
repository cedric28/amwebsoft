import React from "react";

function PageHeader() {
    return (
        <section id="main-banner-page" className="position-relative page-header gallery-header parallax section-nav-smooth">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="page-titles whitecolor text-center padding_top padding_bottom">
                            <h2 className="font-xlight">Welcome</h2>
                            <h2 className="font-bold">To Our Portfolio Work</h2>
                            <h2 className="font-xlight">Let's Build</h2>
                            <h3 className="font-light pt-2">It More Creative With Your Slight Attention</h3>
                        </div>
                    </div>
                </div>
                <div className="gradient-bg title-wrap">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 whitecolor">
                            <h3 className="float-start">Portfolio</h3>
                            <ul className="breadcrumb top10 bottom10 float-end">
                                <li className="breadcrumb-item hover-light"><a href="/home">Home</a></li>
                                <li className="breadcrumb-item hover-light">Portfolio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageHeader;