import React from "react";
import { Helmet } from 'react-helmet';
import PageHeader from "./PageHeader";
import SomeServices from "./SomeServices";
import OurServices from "./OurServices";

const Index = (props) => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="descrition" />
            {/* <link rel="canonical" href="https://malikgabroun.com" /> */}
        </Helmet>
        <PageHeader/>
        <SomeServices/>
        <section id="our-feature" className="single-feature padding_bottom padding_top_half mt-1 mt-lg-n4 mt-md-n3">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-7 col-sm-7 text-sm-start text-center wow fadeInLeft" data-wow-delay="300ms">
                        <div className="heading-title mb-4">
                            <h2 className="darkcolor font-normal bottom30">Lets take your <span className="defaultcolor">Business</span> to Next Level</h2>
                        </div>
                        <p className="bottom35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit ultrices maximus. </p>
                        <a href="#our-team" className="button btnsecondary gradient-btn pagescroll mb-sm-0 mb-4">Learn More</a>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-5 col-sm-5 wow fadeInRight" data-wow-delay="300ms">
                        <div className="image"><img alt="SEO" src="assets/images/awesome-feature.png"/></div>
                    </div>
                </div>
            </div>
        </section>
        <OurServices/>
    </div>
  );
}  
export default Index;
