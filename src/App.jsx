import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={[<Contact />]} />
          <Route path="/resume" element={[<Resume />]} />
          <Route path="/projects" element={[<Projects />]} />
          <Route path="/about" element={[<About />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
