import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <Heading
              subtitle={
                <span className="brightminds-subtitle">
                  WELCOME TO BRIGHTMINDS
                </span>
              }
              title="Shaping Young Minds for a Brighter Tomorrow"
            />

            <p className="about-intro">
              At BrightMinds, we believe in nurturing curiosity and building
              strong academic foundations. Our vibrant learning environment and
              caring educators help every child grow with confidence.
            </p>
            <div className="items">
              {homeAbout.map((val, index) => (
                <div className="item flexSB" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="icon" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right row">
            <div className="about-grid-images">
              <img
                src="https://www.hindustantimes.com/brandstories/exam-content/images/dummy1.jpg"
                alt="BrightMinds Learning"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg"
                alt="BrightMinds Learning"
              />
              <img
                src="https://images.hindustantimes.com/img/2024/08/18/1600x900/Such-spaces--often-operating-24x7--brand-themselve_1724004878187_1724012816237.jpg"
                alt="BrightMinds Learning"
              />
              <img
                src="https://npsvrp.com/wp-content/uploads/2024/03/the-importance-of-parent-teacher-communication-in-enhancing-student-success.png"
                alt="BrightMinds Learning"
              />
            </div>

            <div className="video-container">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/mF2LDfc050k?si=aLGSNIM4l4L3dA_V"
                title="BrightMinds Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
