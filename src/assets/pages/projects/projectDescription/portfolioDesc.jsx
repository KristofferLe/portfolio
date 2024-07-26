import React, { useContext } from "react";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import DescriptionTemplate from "./descriptionTemplate";
import textData from "../../../data/textData.json";

export default function PortfolioDesc() {
  const { langVar } = useContext(LangVariableContext);

  return (
    <DescriptionTemplate
      projectTitle={
        textData.languages[langVar].projectDescription.portfolioDesc.title
      }
      projectDescription={
        textData.languages[langVar].projectDescription.portfolioDesc.description
      }
      client="N/A"
      tech={textData.languages[langVar].projectDescription.portfolioDesc.tech}
      features={
        textData.languages[langVar].projectDescription.portfolioDesc.features
      }
      liveLink="https://lettegard.com/"
    />
  );
}
