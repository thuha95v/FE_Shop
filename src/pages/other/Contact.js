import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import { useState } from "react";
import { createContact } from "../../services/contact/contact.api";
import { toast } from "react-toastify";

const Contact = ({ location }) => {
  const { pathname } = location;
  const [valueRequest, setValueRequest] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createContact(valueRequest).then((res) => {
      if (res) {
        toast.success("Đã gửi thành công");
        setValueRequest({
          email: "",
          message: "",
          name: "",
          subject: "",
        });
      }
    });
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Contact</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/contact/background-contact.jpg"
                }
                alt=""
              />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+84 345 678 102</p>
                      <p>+84 345 899 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">flone@email.com</a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">floneshop.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Bac Tu Liem, </p>
                      <p>Hanoi city.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Gửi thông tin</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder="Name*"
                          type="text"
                          value={valueRequest.name}
                          onChange={(e) =>
                            setValueRequest({
                              ...valueRequest,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder="Email*"
                          type="email"
                          value={valueRequest.email}
                          onChange={(e) =>
                            setValueRequest({
                              ...valueRequest,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                          value={valueRequest.subject}
                          onChange={(e) =>
                            setValueRequest({
                              ...valueRequest,
                              subject: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                          value={valueRequest.message}
                          onChange={(e) =>
                            setValueRequest({
                              ...valueRequest,
                              message: e.target.value,
                            })
                          }
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
