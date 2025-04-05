import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp";

  return (
    <>
      <Back title="Contact Us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrightMinds Map"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact BrightMinds</h1>
            <p>
              We'd love to hear from you — whether it's a question, feedback, or
              just a hello!
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  BrightMinds School, 123 Learning Lane, Knowledge City, ED
                  45678
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>contact@brightminds.edu</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91********</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create a message here..."
              ></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>  
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
