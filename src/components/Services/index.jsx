import React from "react";
import PageHeader from "./PageHeader";
import { useTitle } from "../Common/customHooks";

function Index() {
    useTitle("Our Services")
  return (
    <div>
        <PageHeader />
        <section id="our-services" className="padding bglight">
            <div className="container">
                <div className="col-md-12 text-center heading_space wow fadeIn" data-wow-delay="300ms">
                    <h2 className="heading bottom30 darkcolor font-light2"><span className="font-weight-light">Our Service</span> Detail
                        <span className="divider-center"></span>
                    </h2>
                    <div className="col-md-8 offset-md-2">
                        <p className="mb-n3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                    </div>
                </div>
                <div id="services-measonry" className="cbp">
                    <div className="cbp-item digital brand design">
                        <div className="services-main">
                            <div className="image bottom10">
                                <div className="image"><img alt="SEO" src="assets/images/service2.png"/></div>
                                <div className="overlay">
                                    <a href="services-detail.html" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="services-content brand text-center text-md-start">
                                <h3 className="bottom10 darkcolor"><a href="services-detail.html">Corporate Website with Content Management System</a></h3>
                                <p className="bottom15">With our experiences in creating corporate and content management systems, you can definitely trust that your contents can be published easily.</p>
                                <a href="services-detail.html" className="button-readmore">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cbp-item digital graphics">
                        <div className="services-main">
                            <div className="image bottom10">
                                <div className="image"><img alt="SEO" src="assets/images/service3.png"/></div>
                                <div className="overlay">
                                    <a href="services-detail.html" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="services-content text-center text-md-start">
                                <h3 className="bottom10 darkcolor"><a href="services-detail.html">Inventory System</a></h3>
                                <p className="bottom15">Get ease with our inventory system to track your inventory level, orders, sales and deliveries. We cover modules such Billing and Collection, Cashiering, Purchasing & Payables, Inventory Management, General Ledger, Financial/Report Center, Approvals and Point of Sales</p>
                                <a href="services-detail.html" className="button-readmore">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cbp-item design">
                        <div className="services-main">
                            <div className="image bottom10">
                                <div className="image"><img alt="SEO" src="assets/images/service5.png" /></div>
                                <div className="overlay">
                                    <a href="services-detail.html" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="services-content text-center text-md-start">
                                <h3 className="bottom10 darkcolor"><a href="services-detail.html">HRIS / Payroll</a></h3>
                                <p className="bottom15">We can develop you your own HRIS/Payroll system. We already have a job portal system that you can use as well with your HRIS/Payroll system.
                                </p>
                                <a href="services-detail.html" className="button-readmore">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cbp-item graphics">
                        <div className="services-main">
                            <div className="image bottom10">
                                <div className="image"><img alt="SEO" src="assets/images/service4.png" /></div>
                                <div className="overlay">
                                    <a href="services-detail.html" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="services-content text-center text-md-start">
                                <h3 className="bottom10 darkcolor"><a href="services-detail.html">Loan Management System</a></h3>
                                <p className="bottom15">We can develop you your loan management system that has functionalities to compute monthly amortizations and with accounting module.
                                </p>
                                <a href="services-detail.html" className="button-readmore">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cbp-item digital">
                        <div className="services-main">
                            <div className="image bottom10">
                                <div className="image"><img alt="SEO" src="assets/images/service1.png"/></div>
                                <div className="overlay">
                                    <a href="services-detail.html" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="services-content text-center text-md-start">
                                <h3 className="bottom10 darkcolor"><a href="services-detail.html">Custom Website/ERP Systems</a></h3>
                                <p className="bottom15">Let us know your requirements and processes and we will build you your fully customized system.
                                </p>
                                <a href="services-detail.html" className="button-readmore">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Index;
