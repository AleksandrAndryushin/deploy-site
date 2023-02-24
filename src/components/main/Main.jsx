import React from "react";
import "./style.css";

const Main = () => {
  return (
    <main>
      <section id="Home">
        <h1>Приглашаем ваc на нашу свадьбу</h1>
      </section>
      <section id="History">
        <p>
          Бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла
          бла бла
        </p>
      </section>
      <section id="Blogs"></section>
      <section id="Maps">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab0814185ea507f22aa589d2ade51bf0dd72afeac77c6d1b9a9b957bf2a16d42f&amp;source=constructor"
          width="911"
          height="620"
          title="Место проведения свадьбы"
        />
      </section>
      <section id="Epiloge"></section>
    </main>
  );
};

export default Main;
