import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
