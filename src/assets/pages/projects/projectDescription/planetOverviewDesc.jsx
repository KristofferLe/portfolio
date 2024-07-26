import React, { useContext } from "react";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import DescriptionTemplate from "./descriptionTemplate";
import textData from "../../../data/textData.json";

export default function PlanetOverviewDesc() {
  const { langVar } = useContext(LangVariableContext);

  return (
    <DescriptionTemplate
      projectTitle={
        textData.languages[langVar].projectDescription.planetOverview.title
      }
      projectDescription={
        textData.languages[langVar].projectDescription.planetOverview
          .description
      }
      client="N/A"
      tech={textData.languages[langVar].projectDescription.planetOverview.tech}
      features={
        textData.languages[langVar].projectDescription.planetOverview.features
      }
      liveLink="https://planet-overview.netlify.app/"
    />
  );
}
