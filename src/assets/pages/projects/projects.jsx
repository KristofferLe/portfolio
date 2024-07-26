import React, { useContext } from "react";
import { LangVariableContext } from "../../contexts/langVariableContext";
import { Routes, Route, Link } from "react-router-dom";
import textData from "../../data/textData.json";
import { StyledProjectSection } from "./projectsStyling";
import ProjectCard from "./projectCard";
import planetImg from "../../images/project-images/planetOverview.png";
import dictionaryImg from "../../images/project-images/dictionary.png";
import portoflioImg from "../../images/project-images/portfolio.png";

export default function Projects() {
  const { langVar } = useContext(LangVariableContext);

  return (
    <StyledProjectSection>
      <ProjectCard
        $backgroundImg={planetImg}
        number="1"
        title={textData.languages[langVar].projectPage.planet}
        description="Front-End"
        to="/planetOverviewDesc"
      />
      <ProjectCard
        $backgroundImg={dictionaryImg}
        number="2"
        title={textData.languages[langVar].projectPage.dictionary}
        description="API"
        to="/dictionaryDesc"
      />
      <ProjectCard
        $backgroundImg={portoflioImg}
        number="3"
        title="Portfolio"
        description={textData.languages[langVar].projectPage.portfolioType}
        to="/portfolioDesc"
      />
      <ProjectCard
        number="4"
        title="COMING SOON"
        description="COMING SOON"
        to=""
      />
    </StyledProjectSection>
  );
}
