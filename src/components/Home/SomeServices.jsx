import React from "react";

function SomeService() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="services-slider" className="owl-carousel">
                        <div className="item">
                            <div className="service-box">
                                <span className="bottom25"><i className="fa fa-clipboard"></i></span>
                                <h4 className="bottom10 text-nowrap"><a href="#">Well Documented</a></h4>
                                <p>Every process will be well documented.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-box">
                                <span className="bottom25"><i className="fa fa-laptop"></i></span>
                                <h4 className="bottom10"><a href="#">Fully Responsive</a></h4>
                                <p>All layouts and designs are mobile responsive.</p>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="service-box">
                                <span className="bottom25"><i className="fa fa-globe"></i></span>
                                <h4 className="bottom10"><a href="#">Full Support</a></h4>
                                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-box">
                                <span className="bottom25"><i className="fa fa-edit"></i></span>
                                <h4 className="bottom10"><a href="#">Clean Coded</a></h4>
                                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                            </div>
                        </div> */}
                        <div className="item">
                            <div className="service-box">
                                <span className="bottom25"><i className="fa fa-globe"></i></span>
                                <h4 className="bottom10"><a href="#">SEO Optimized</a></h4>
                                <p>Applied basic SEO when we develop website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SomeService;