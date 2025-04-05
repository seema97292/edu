import React from "react";
import Heading from "../common/heading/Heading";
import ActivitiesCard from "./ActivitiesCard";

const Activities = () => {
  return (
    <section className="activities padding">
      <div className="container">
        <Heading
          subtitle="Activities"
          title="Beyond the Classroom Fun & Learning"
        />
        <ActivitiesCard />
      </div>
    </section>
  );
};

export default Activities;
