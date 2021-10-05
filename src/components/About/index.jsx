import React from "react";
import PageHeader from "./PageHeader";
import { Helmet } from 'react-helmet';

const Index = (props) => {
  return (
    <div>
        <Helmet>
            <title>About Us</title>
        </Helmet>
      <PageHeader />
      <section id="aboutus" className="padding_top padding_bottom">
        <div className="container aboutus">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 padding_bottom_half">
                    <div className="image"><img alt="SEO" src="assets/images/aboutus.png" /></div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-6 padding_bottom_half text-center text-md-start">
                    <h2 className="darkcolor font-normal bottom30">Lets take your <span className="defaultcolor">Business</span> to Next Level</h2>
                    <p className="bottom35">AMWebsoft.com is under AM Web Developers Software Development Services company. It started with two friends who partnered on web development of an ERP system. Eventually as time goes, they decided to build the company.</p>
                    <a href="/home" className="button btnsecondary gradient-btn pagescroll">Learn More</a>
                </div>
            </div>
            <div className="row  align-items-center">
                <div className="col-lg-5  col-md-6 padding_top_half text-center text-md-start">
                    <h2 className="darkcolor font-normal bottom30">The Best Skillset Available in <span className="defaultcolor">Our Market</span> </h2>
                    <p className="bottom35">AMWebsoft.com offer web-based software development services. We also offer most our systems as ERP based systems. Some of the systems we develop are Inventory systems, Accounting systems, Human Resources Management System (HRIS, payroll), Content Management Systems, Point of Sales, Loan Management Systems and more.</p>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-6 padding_top_half">
                    <div className="progress-bars">
                        <div className="progress">
                            <p>Adobe Photoshop</p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div className="progress">
                            <p>PHP/Laravel/Codeigniter/Wordpress</p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar"  style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div className="progress">
                            <p>Jquery/React JS/Vue Js</p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar"  style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div className="progress">
                            <p>HTML / CSS </p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar"  style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div className="progress">
                            <p>SEO </p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar"  style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div className="progress">
                            <p>Social Media Marketer </p>
                            <div className="progress-bar gradient-bg" data-value="100">
                                <div className="progress-bar gradient-bg whitecolor" role="progressbar"  style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
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
