import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import "./component/Style.css";

import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>

          <Footer/>
        </Router>
      </>
    );
  }
}
