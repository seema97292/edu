import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <section className="online">
      <div className="container">
        <Heading title="Explore Engaging & Student-Friendly Online Courses" />
        <div className="content grid3">
          {online.map((val, index) => (
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="course" />
              </div>

              <div className="text">
                <h2>{val.courseName}</h2>
                <p>{val.description}</p>
                <button className="enroll-btn">get started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
