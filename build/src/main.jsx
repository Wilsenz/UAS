import React from "react";
import ReactDOM from "react-dom";
import Frontpage from "./Page1.jsx";
import Provincemenu from "./Page2.jsx";
import Quiz from "./Quiz_Makanan";
import Aboutus from "./aboutus.jsx";
import "./App.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojipediaLinks from "./EmojipediaLinks.jsx"; // Import the EmojipediaLinks component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Page2" element={<Provincemenu />} />
        <Route path="/" element={<EmojipediaLinks />} />
        <Route path="/Quiz_Makanan" element={<Quiz />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
