import React from "react";
import Layout from "../components/Layout/Layout";
import contactus from "../../public/images/contactus.jpeg";
import "./PageCss/Contact.css";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecomm app"}>
      <div className="contact_main">
        <div className="left"></div>
        <div className="right">
          {/* here */}

          <div>
            <h1>Contact Form</h1>
            <form id="contact_form" name="contact_form" method="post">
              <div className="mb-5 row">
                <div className="col">
                  <label>First Name</label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    className="form-control"
                    id="first_name"
                    name="first_name"
                  />
                </div>
                <div className="col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    className="form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col">
                  <label htmlFor="email_addr">Email address</label>
                  <input
                    type="email"
                    required
                    maxLength={50}
                    className="form-control"
                    id="email_addr"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone_input">Phone</label>
                  <input
                    type="tel"
                    required
                    maxLength={50}
                    className="form-control"
                    id="phone_input"
                    name="Phone"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary px-4 btn-lg">
                Post
              </button>
            </form>
          </div>

          {/* here */}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
