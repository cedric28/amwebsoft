import React from "react";

function PageHeader() {
  return (
    <section id="main-banner-page" className="position-relative page-header about-header parallax section-nav-smooth">
        <div className="overlay overlay-dark opacity-7"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="page-titles whitecolor text-center padding_top padding_bottom">
                        <h2 className="font-xlight">A New Idea</h2>
                        <h2 className="font-bold">Inspires Us To Make</h2>
                        <h2 className="font-xlight">Great Works</h2>
                        <h3 className="font-light pt-2">The Best Multipurpose Template In Market</h3>
                    </div>
                </div>
            </div>
            <div className="gradient-bg title-wrap">
                <div className="row">
                    <div className="col-lg-12 col-md-12 whitecolor">
                        <h3 className="float-start">About Our Company</h3>
                        <ul className="breadcrumb top10 bottom10 float-end">
                            <li className="breadcrumb-item hover-light"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item hover-light">About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

  export default PageHeader;