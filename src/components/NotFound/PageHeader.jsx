import React from "react";

function PageHeader() {
  return (
    <section id="main-banner-page" className="position-relative page-header error404-header parallax section-nav-smooth">
        <div className="overlay overlay-dark opacity-2 z-index-1"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="page-titles whitecolor text-center padding_top padding_bottom">
                        <h1 className="font-light font-404-heading">404</h1>
                        <h3 className="font-light">That Page Couldn't Be Found</h3>
                    </div>
                </div>
            </div>
            <div className="gradient-bg title-wrap">
                <div className="row">
                    <div className="col-lg-12 col-md-12 whitecolor">
                        <h3 className="float-start">ERROR 404</h3>
                        <ul className="breadcrumb top10 bottom10 float-end">
                            <li className="breadcrumb-item hover-light"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item hover-light">404</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default PageHeader;