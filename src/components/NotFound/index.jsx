import React from "react";
import PageHeader from "./PageHeader";
import Footer from "../Footer";
import HeaderWhite from "../Common/HeaderWhite"

function Index() {
    return (
        <div>
            <HeaderWhite />
            <PageHeader />
            <section id="error" class="padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="error wow bounceIn" data-wow-delay="300ms">
                                <h1>404</h1>
                                <h2>404</h2>
                            </div>
                            <p class="heading_space">We are sorry, the page you want isn’t here anymore. May be one of the links below can help !</p>
                            <a href="index.html" class="button gradient-btn wow fadeIn mb-3 mb-sm-0" data-wow-delay="400ms">back to home</a>
                            <a href="javascript:void(0)" class="button btn-dark wow fadeIn" data-wow-delay="400ms">Get a quote</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}


export default Index;