import React from "react";
import PageHeader from "./PageHeader";
import { useTitle } from "../Common/customHooks";

function Index() {
    useTitle("Portfolio");
    
    return (
        <div>
        <PageHeader />
            <section id="gallery" className="bglight position-relative padding_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeIn top15" data-wow-delay="300ms">
                            <h2 className="heading bottom45 darkcolor font-light2">Our <span className="font-normal">Portfolio</span>
                                <span className="divider-center"></span>
                            </h2>
                            <div className="col-md-8 offset-md-2 bottom40">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div id="grid-mosaic" className="cbp cbp-l-grid-mosaic-flat">
                            
                                <div className="cbp-item brand graphics">
                                    <img src="assets/images/gallery-1.jpg" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="images/gallery-1.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Rainy Outdoor</h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="cbp-item digital brand graphics design">
                                    <img src="assets/images/portfolio1.png" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="assets/images/portfolio1.png" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Portfolio 1</h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="cbp-item design digital graphics">
                                    <img src="assets/images/gallery-11.jpg" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="images/gallery-11.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Shadow Smoke</h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="cbp-item brand graphics">
                                    <img src="assets/images/gallery-2.jpg" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="images/gallery-2.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Eiffel Model</h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="cbp-item brand graphics design design">
                                    <img src="assets/images/portfolio3.png" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="assets/images/portfolio3.png" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Portfolio 3</h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="cbp-item brand digital design">
                                    <img src="assets/images/portfolio2.png" alt=""/>
                                    <div className="gallery-hvr whitecolor">
                                        <div className="center-box">
                                            <a href="assets/images/portfolio2.png" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                            <a href="gallery-detail.html" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                            <h4 className="w-100">Portfolio 2</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                            
                                <div id="js-loadMore-mosaic" className="cbp-l-loadMore-button ">
                                    <a href="load-more.html" className="cbp-l-loadMore-link button py-1 button gradient-btn whitecolor transition-3" rel="nofollow">
                                        <span className="cbp-l-loadMore-defaultText">LOAD MORE (<span className="cbp-l-loadMore-loadItems">13</span>)</span>
                                        <span className="cbp-l-loadMore-loadingText">LOADING <i className="fas fa-spinner fa-spin"></i></span>
                                        <span className="cbp-l-loadMore-noMoreLoading d-none">NO MORE WORKS</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="stayconnect" class="bglight position-relative padding_top mt-n5">

            </section>
        </div>
    );
}


export default Index;