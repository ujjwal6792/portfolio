import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import UniqueHandlooms from "./ProductPages/UniqueHandlooms";
import Acrossme from "./ProductPages/Acrossme";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = theme === "dark" ? "#181823" : "#eeeeff";
    body.style.backgroundImage =
      theme === "dark"
        ? `radial-gradient(#27F7B220 3%, transparent 5%),
      radial-gradient(#27F7B220 3%, transparent 5%)`
        : `radial-gradient(#181823 3%, transparent 5%),
        radial-gradient(#181823 3%, transparent 5%)`;
    body.style.backgroundSize = "30px 30px";
    body.style.transitionDuration= "300ms";
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <Router>
        <Header theme={theme} themeSetter={setTheme} />
        <Routes>
          <Route path="/acrossme" element={[<Acrossme />]} />
          <Route path="/uniquehandlooms" element={[<UniqueHandlooms />]} />
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
