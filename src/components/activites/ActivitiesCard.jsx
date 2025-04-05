import React from "react";
import { activities } from "../../dummydata";
import "./activities.css";

const ActivitiesCard = () => {
  return (
    <div className="activities-grid">
      {activities.map((activity, index) => (
        <div className="activity-card shadow" key={index}>
          <img
            src={activity.icon}
            alt={activity.title}
            className="activity-icon"
          />
          <h3>{activity.title}</h3>
          <p>{activity.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesCard;
