import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Banner from "./banner/banner";
import SkillSection from "./skills/skillsSection";
import About from "./about/about";
import { useSelector } from "react-redux";
import textData from "../../data/textData.json";
import { LangVariableContext } from "../../contexts/langVariableContext";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  .skills-header {
    margin: 10px;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export default function Landing() {
  const language = useSelector((state) => state.language);
  const menuOpen = useSelector((state) => state.menuOpen);
  const { langVar } = useContext(LangVariableContext);

  return (
    <StyledMain menuOpen={menuOpen}>
      <Banner />
      <h3 className="skills-header">
        {textData.languages[langVar].skills.title}
      </h3>
      <SkillSection />
      <About />
    </StyledMain>
  );
}
