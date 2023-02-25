import React from "react";
import Footer from "../UI/footer/Footer";
import Header from "../UI/header/Header";
import Menu from "../UI/menu/Menu";
import MainSection from "../UI/mainSection/MainSection";

const Home = () => {
  return (
    <>
      <main id="Home">
        <Menu />
        <Header />
        {/*Home section -->*/}
        <div>
          <MainSection />
          {/*Home section <--*/}
          {/*Blog section -->*/}
          <section id="#Blog">
            <button className="left-controller">
              <img src="" alt="" />
            </button>
            <nav className="carousel"></nav>
            <button className="right-controller">
              <img src="" alt="" />
            </button>
          </section>
          {/*Blog section <--*/}
          {/*Time section -->*/}
          <section id="#Time">
            <h1>Расписание</h1>
            <ul></ul>
          </section>
          {/*Time section <--*/}
          {/*Place section -->*/}
          <section id="#Place">
            <h1>Размещение</h1>
            <iframe
              title="Карты"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A2d8b5f8eea1bffd6c1a9af22ddfc5d494d358f77e5789bc652c2033ca0918963&amp;source=constructor"
            />
          </section>
          {/*Place section <--*/}
          {/*Peoples section -->*/}
          <section id="#Peoples"></section>
          {/*Peoples section <--*/}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
