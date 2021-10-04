import React from "react";

function Footer() {
  return (
    <footer id="site-footer" className=" bgdark padding_top">
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer_panel padding_bottom_half bottom20">
                      <a href="index.html" className="footer_logo bottom25"><img src="assets/images/logo-transparent.png" alt="MegaOne"/></a>
                      <p className="whitecolor bottom25">Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
                      <div className="d-table w-100 address-item whitecolor bottom25">
                          <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                          <p className="d-table-cell align-middle bottom0">
                          (02) 83612664 <a className="d-block" href="mailto:team@amwebsoft.com">team@amwebsoft.com</a>
                          </p>
                      </div>
                      <ul className="social-icons white wow fadeInUp" data-wow-delay="300ms">
                          <li><a  href="https://www.facebook.com/amwebsoft" className="facebook"><i className="fab fa-facebook-f"></i> </a> </li>
                          <li><a  href="https://twitter.com/amwebsoft" className="twitter"><i className="fab fa-twitter"></i> </a> </li>
                          <li><a  href="https://www.linkedin.com/company/74891134/admin/" className="linkedin"><i className="fab fa-linkedin-in"></i> </a> </li>
                          <li><a  href="#" className="insta"><i className="fab fa-instagram"></i> </a> </li>
                          <li><a  href="https://m.me/amwebsoft"><i className="fab fa-facebook-messenger"></i> </a> </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer_panel padding_bottom_half bottom20 ps-0 ps-lg-5">
                      <h3 className="whitecolor bottom25">Sitemap</h3>
                      <ul className="links">
                          <li><a href="/home">Home</a></li>
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/services">Our Services</a></li>
                          <li><a href="/portfolio">Portfolio</a></li>
                          <li><a href="/contact-us">Contact Us</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="footer_panel padding_bottom_half bottom20">
                      <h3 className="whitecolor bottom25">Business hours</h3>
                      <p className="whitecolor bottom25">Our support available to help you 24 hours a day, seven days week</p>
                      <ul className="hours_links whitecolor">
                          <li><span>Monday-Saturday:</span> <span>7:00 AM - 6.00 PM</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  );
}

export default Footer;
