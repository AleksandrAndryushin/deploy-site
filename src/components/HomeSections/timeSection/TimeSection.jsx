import React from "react";
import TimeData from "../../../assets/json/Time.json";

const TimeSection = () => {
  const data = TimeData;
  return (
    <section id="#Time">
      <h1>Расписание</h1>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
};

export default TimeSection;
