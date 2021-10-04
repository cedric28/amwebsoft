
import React from "react";

function OurServices() {
  return (
    <section id="our-process" className="padding bgdark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <div className="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms">
                        <span>Quisque tellus risus, adipisci </span>
                        <h2 className="fw-normal">Our Services </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="process-wrapp">
                    <li className="whitecolor wow fadeIn" data-wow-delay="300ms">
                        <span className="pro-step bottom20">01</span>
                        <p className="fontbold bottom25">Corporate Website with Content Management System</p>
                        <p className="mt-n2 mt-sm-0">With our experiences in creating corporate and content management systems, you can definitely trust that your contents can be published easily.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                        <span className="pro-step bottom20">02</span>
                        <p className="fontbold bottom25">Inventory System</p>
                        <p className="mt-n2 mt-sm-0">Get ease with our inventory system to track your inventory level, orders, sales and deliveries. We cover modules such Billing and Collection, Cashiering, Purchasing & Payables, Inventory Management, General Ledger, Financial/Report Center, Approvals and Point of Sales.</p>
                    </li>
                    <li className="whitecolor wow fadeIn active" data-wow-delay="500ms">
                        <span className="pro-step bottom20">03</span>
                        <p className="fontbold bottom25">HRIS / Payroll</p>
                        <p className="mt-n2 mt-sm-0">We can develop you your own HRIS/Payroll system. We already have a job portal system that you can use as well with your HRIS/Payroll system.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                        <span className="pro-step bottom20">04</span>
                        <p className="fontbold bottom25">Loan Management System</p>
                        <p className="mt-n2 mt-sm-0">We can develop you your loan management system that has functionalities to compute monthly amortizations and with accounting module.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="700ms">
                        <span className="pro-step bottom20">05</span>
                        <p className="fontbold bottom25">Custom Website/ERP Systems</p>
                        <p className="mt-n2 mt-sm-0">Let us know your requirements and processes and we will build you your fully customized system.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);
}

export default OurServices;