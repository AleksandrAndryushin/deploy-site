import React from "react";
import TableCard from "../../UI/tableCard/TableCard";
import PeoplesData from "../../../assets/json/Peoples.json";

const PeoplesSection = () => {
  const data = PeoplesData;
  return (
    <section id="#Peoples">
      <div className="table">
        {data.map((item, index) => {
          return TableCard(
            item["path"],
            item["alt"],
            item["fullName"],
            item["socials"],
            index
          );
        })}
      </div>
    </section>
  );
};

export default PeoplesSection;
