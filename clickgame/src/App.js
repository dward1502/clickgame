import React from "react";
import Nav from "./components/navbar";
import Head from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
 <div className="container">
  <Nav />
  <Head />
  <Main />
  <Footer />
 </div>
);

export default App;
