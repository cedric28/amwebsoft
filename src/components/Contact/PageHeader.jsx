import React from "react";

function PageHeader() {
  return (
    <section id="main-banner-page" className="position-relative page-header contact-header section-nav-smooth parallax">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="page-titles whitecolor text-center padding">
                        <h2 className="font-bold"> Contact Us</h2>
                        <h3 className="font-light py-3">We'd Love To Here From You.</h3>
                    </div>
                </div>
            </div>
            <div className="gradient-bg title-wrap mt-n5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 whitecolor">
                        <h3 className="float-start">Contact Us</h3>
                        <ul className="breadcrumb top10 bottom10 float-end">
                            <li className="breadcrumb-item hover-light"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item hover-light">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default PageHeader;