import React, { useContext } from "react";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import DescriptionTemplate from "./descriptionTemplate";
import textData from "../../../data/textData.json";

export default function DictionaryDesc() {
  const { langVar } = useContext(LangVariableContext);

  return (
    <DescriptionTemplate
      projectTitle={
        textData.languages[langVar].projectDescription.dictionaryDesc.title
      }
      projectDescription={
        textData.languages[langVar].projectDescription.dictionaryDesc
          .description
      }
      client="N/A"
      tech={textData.languages[langVar].projectDescription.dictionaryDesc.tech}
      features={
        textData.languages[langVar].projectDescription.dictionaryDesc.features
      }
    liveLink="https://lettegard-dictionary-web-app.netlify.app/"

    />
  );
}
