import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import StyledTemplate from "./templateStyling";
import textData from "../../../data/textData.json";

export default function DescriptionTemplate({
  projectTitle,
  projectDescription,
  features = [],
  tech = [],
  client,
  liveLink,
}) {
  const { langVar } = useContext(LangVariableContext);
  const $darkMode = useSelector((state) => state.$darkMode);

  return (
    <StyledTemplate $darkMode={$darkMode}>
      <h2>{textData.languages[langVar].projectDescription.pageName}</h2>
      <section className="project-info-container">
        <ul className="client-container">
          <h3>{textData.languages[langVar].projectDescription.clientTitle}</h3>
          <small>{client}</small>
        </ul>
        <h3 className="project-title">{projectTitle}</h3>
        <p className="project-description">{projectDescription}</p>
        <div className="tech-stack-container">
          <h3 className="text-stack-title">
            {textData.languages[langVar].projectDescription.builtWithTitle}
          </h3>
          <ul className="tech-stack">
            {tech ? (
              tech.map((item, index) => (
                <li className="tech-item" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <p>
                {textData.languages[langVar].projectDescription.techNotFound}
              </p>
            )}
          </ul>
        </div>
      </section>
      <section className="features-container">
        <h3>{textData.languages[langVar].projectDescription.featureTitle}</h3>
        <ul className="features-list">
          {features ? (
            features.map((item, index) => (
              <li className="feature-item" key={index}>
                {item}
              </li>
            ))
          ) : (
            <p>
              {textData.languages[langVar].projectDescription.featureNotFound}
            </p>
          )}
        </ul>
        <a
          className="see-live-button"
          href={liveLink}
          aria-label="Link to the planet overview project"
          target="_blank"
        >
          {textData.languages[langVar].projectDescription.seeLiveButton}
        </a>
      </section>
    </StyledTemplate>
  );
}
