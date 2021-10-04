import React from "react";

function PageHeader() {
  return (
    <section id="main-banner-page" className="position-relative page-header service-header section-nav-smooth parallax">
        <div className="overlay overlay-dark opacity-7 z-index-1"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="page-titles whitecolor text-center padding_top padding_bottom">
                        <h2 className="font-xlight pt-3">We Help To</h2>
                        <h2 className="font-bold">Elevate Your Business</h2>
                        <h2 className="font-xlight">To Next Level</h2>
                        <h3 className="font-light pb-4 pt-2">The Best Multipurpose Template in Market</h3>
                    </div>
                </div>
            </div>
            <div className="gradient-bg title-wrap mt-n5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 whitecolor">
                        <h3 className="float-start">Services</h3>
                        <ul className="breadcrumb top10 bottom10 float-end">
                            <li className="breadcrumb-item hover-light"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item hover-light">Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default PageHeader;