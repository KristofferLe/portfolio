import React from "react";
import DarkModeButton from "./assets/components/buttons/darkModeButton";
import LanguageButton from "./assets/components/buttons/languageButton";
import Hamburger from "./assets/components/buttons/hamburgerButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/header";
import Start from "./assets/pages/landing/landing";
import Projects from "./assets/pages/projects/projects";
import ContactPage from "./assets/pages/contact/contact";
import PlanetOverviewDesc from "./assets/pages/projects/projectDescription/planetOverviewDesc";
import DictionaryDesc from "./assets/pages/projects/projectDescription/dictionaryDesc";
import PortfolioDesc from "./assets/pages/projects/projectDescription/portfolioDesc";
import NotFound from "./assets/pages/404/404";
import Footer from "./assets/components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <DarkModeButton />
        <LanguageButton />
        <Hamburger />
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/planetOverviewDesc" element={<PlanetOverviewDesc />} />
          <Route path="/dictionaryDesc" element={<DictionaryDesc />} />
          <Route path="/portfolioDesc" element={<PortfolioDesc />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
