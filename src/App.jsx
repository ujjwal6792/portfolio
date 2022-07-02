import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  return (
      <div className="app">
    <Router>
    <Header />
        <Routes>
          {/* <Route path="/admin" element={[<Header />, <Admin />]} /> */}
          <Route path="/"  element={[ <Home />]} />
        </Routes>
    <Footer/>
    </Router>
      </div>
  );
}

export default App;
