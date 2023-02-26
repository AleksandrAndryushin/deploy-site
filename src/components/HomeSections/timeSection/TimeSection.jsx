import React from "react";
import TimeData from "../../../assets/json/Time.json";

const TimeSection = () => {
  const data = TimeData;
  return (
    <section id="#Time">
      <h1>Расписание</h1>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </section>
  );
};

export default TimeSection;
