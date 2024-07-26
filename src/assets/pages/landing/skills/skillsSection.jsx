import React from "react";
import styled from "styled-components";
 import SkillCard from "./skillCard";
import reactIcon from "../../../images/svg/react.svg";
import jsIcon from "../../../images/svg/js.svg";
import htmlIcon from "../../../images/svg/html.svg";
import cssIcon from "../../../images/svg/css.svg";
import tailwindIcon from "../../../images/svg/tailwind.svg";
import gitIcon from "../../../images/svg/git.svg";
import githubIcon from "../../../images/svg/github.svg";
import reduxIcon from "../../../images/svg/redux.svg";

const StyledSkillSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
`;

export default function SkillSection() {
  return (
    <StyledSkillSection id="skill-section">
      <SkillCard icon={reactIcon} title="React" level="Intermediate" />
      <SkillCard icon={reduxIcon} title="Redux" level="Basics" />
      <SkillCard icon={jsIcon} title="JavaScript" level="Intermediate" />
      <SkillCard icon={cssIcon} title="CSS" level="Intermediate - Advanced" />
      <SkillCard icon={htmlIcon} title="HTML" level="Intermediate - Advanced" />
      <SkillCard
        icon={tailwindIcon}
        title="TailwindCSS"
        level="Intermediate - Advanced"
      />

      <SkillCard icon={gitIcon} title="git" level="Basics" />
      <SkillCard icon={githubIcon} title="GitHub" level="Basics" />
    </StyledSkillSection>
  );
}
