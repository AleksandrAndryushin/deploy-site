import React from "react";
import Footer from "../UI/footer/Footer";
import Header from "../UI/header/Header";
import Menu from "../UI/menu/Menu";
import MainSection from "../HomeSections/mainSection/MainSection";
import BlogSection from "../HomeSections/blogSection/BlogSection";
import TimeSection from "../HomeSections/timeSection/TimeSection";
import PeoplesSection from "../HomeSections/peoplesSection/PeoplesSection";
import PlaceSection from "../HomeSections/placeSection/PlaceSection";

const Home = () => {
  return (
    <>
      <main id="Home">
        <Menu />
        <Header />
        <div>
          <MainSection />
          <BlogSection />
          <TimeSection />
          <PlaceSection />
          <PeoplesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
