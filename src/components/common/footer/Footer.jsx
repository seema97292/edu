import React from "react";
import "./footer.css";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-container">
          <img src={logo} alt="BrightMinds Logo" className="newsletter-logo" />

          <div>
            <h2 className="newsletter-title">Join our Newsletter</h2>
            <p className="newsletter-tagline">Stay updated with our latest news</p>
          </div>

          <div className="input-wrapper">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>BrightMinds</h1>
            <span>Inspiring Future Leaders</span>
            <p>
              We nurture young minds with engaging and meaningful education,
              empowering students to excel.
            </p>

            <div className="social-icons">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-linkedin-in icon"></i>
            </div>
          </div>

          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About BrightMinds</li>
              <li>Our Programs</li>
              <li>Online Courses</li>
              <li>Events & Activities</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Admissions</li>
              <li>Academic Calendar</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Contact BrightMinds</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i> 123 Education Lane, Knowledge
                City, India
              </li>
              <li>
                <i className="fa fa-phone-alt"></i> +91 98**** ***00
              </li>
              <li>
                <i className="fa fa-paper-plane"></i> hello@brightminds.edu.in
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <p>
          © {new Date().getFullYear()} BrightMinds. Crafted with{" "}
          <i className="fa fa-heart"></i> to empower young learners.
        </p>
      </div>
    </>
  );
};

export default Footer;
