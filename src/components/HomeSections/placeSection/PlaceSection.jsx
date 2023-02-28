import React from "react";
import PlaceData from "../../../assets/json/Place.json";

const PlaceSection = () => {
  const data = PlaceData;
  return (
    <section id="#Place">
      <h1>Размещение</h1>
      <iframe title={data["title"]} src={data["map-src"]} />
      <h2 className="description">{data["description"]}</h2>
    </section>
  );
};

export default PlaceSection;
