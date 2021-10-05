import React,{ useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { Helmet } from 'react-helmet';

function Index() {
    const [loading, setLoading] = useState(false);
    const username = useFormInput("");
    const email = useFormInput("");
    const message = useFormInput("");
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        setError(null);
        setLoading(true);
        // axios
        //     .post("http://localhost:4000/users/signin", {
        //         username: username.value,
        //         email: email.value,
        //         message: message.value
        //     })
        //     .then((response) => {
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         setLoading(false);
        //         if (error.response.status === 401)
        //         setError(error.response.data.message);
        //         else setError("Something went wrong. Please try again later.");
        //     });
    }
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <PageHeader />
            <section id="stayconnect1" className="bglight position-relative padding noshadow">
                <div className="container whitebox">
                    <div className="widget py-5">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeIn mt-n3" data-wow-delay="300ms">
                                <h2 className="heading bottom30 darkcolor font-light2 pt-1"><span className="font-normal">Contact</span> Us
                                    <span className="divider-center"></span>
                                </h2>
                                <div className="col-md-8 offset-md-2 bottom35">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 order-sm-2">
                                <div className="contact-meta px-2 text-center text-md-start">
                                    <div className="heading-title">
                                        <span className="defaultcolor mb-3">AMWebsoft.com</span>
                                        <h2 className="darkcolor font-normal mb-4"><span className="d-none d-md-inline-block">Our</span> Agency Office <span className="d-none d-md-inline-block">In San Isidro Rodriguez Rizal</span></h2>
                                    </div>
                                    <p className="bottom10">Address: Blk 18 Lot 52 Southville 8C PH 1N San Isidro Rodriguez Rizal</p>
                                    <p className="bottom10">(02) 83612664</p>
                                    <p className="bottom10"><a href="mailto:team@amwebsoft.com">team@amwebsoft.com</a></p>
                                    <p className="bottom10">Mon-Sat: 7am-6pm</p>
                                    <p className="bottom10">Talk to Anna</p>
                                    <ul className="social-icons mt-4 mb-4 mb-sm-0 wow fadeInUp" data-wow-delay="300ms">
                                        <li><a  href="https://www.facebook.com/amwebsoft"><i className="fab fa-facebook-f"></i> </a> </li>
                                        <li><a  href="https://twitter.com/amwebsoft"><i className="fab fa-twitter"></i> </a> </li>
                                        <li><a  href="https://www.linkedin.com/company/74891134/admin/"><i className="fab fa-linkedin-in"></i> </a> </li>
                                        <li><a href="#"><i className="fab fa-instagram"></i> </a> </li>
                                        <li><a  href="https://api.whatsapp.com/send?phone=09176270449&text=Hello, we the AMWebsoft"><i className="fab fa-whatsapp"></i> </a> </li>
                                        <li><a  href="mailto:team@amwebsoft.com"><i className="far fa-envelope"></i> </a> </li>
                                        <li><a  href="https://m.me/amwebsoft"><i className="fab fa-facebook-messenger"></i> </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="heading-title  wow fadeInUp" data-wow-delay="300ms">
                                    <form className="getin_form wow fadeInUp" data-wow-delay="400ms">
                                        <div className="row px-2">
                                            <div className="col-md-12 col-sm-12" id="result1">
                                            {error && (
                                                <>
                                                <div class="alert-danger" style={{ padding:"10px", marginBottom: "25px"}}>{error}</div>
                                                <br />
                                                </>
                                            )}
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name1" className="d-none"></label>
                                                    <input className="form-control" id="name1" type="text" placeholder="Name:"  {...username} name="userName" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="email1" className="d-none"></label>
                                                    <input className="form-control" type="email" id="email1" placeholder="Email:" {...email} name="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="message1" className="d-none"></label>
                                                    <textarea className="form-control" id="message1" placeholder="Message:" {...message} name="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <input type="button" className="button gradient-btn w-100" onClick={handleSubmit}  value={loading ? "Loading..." : "Send"} disabled={loading}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
};


export default Index;