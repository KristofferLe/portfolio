import React, { useContext } from "react";
import styled from "styled-components";
import { LangVariableContext } from "../../contexts/langVariableContext";
import { useSelector } from "react-redux";
import textData from "../../data/textData.json";

const StyledNotFoundPage = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 4rem;

  p {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .not-found-title {
    font-size: 5rem;
    font-weight: 800;
  }
`;

export default function NotFound() {
  const { langVar } = useContext(LangVariableContext);
  const language = useSelector((state) => state.language);

  return (
    <StyledNotFoundPage>
      <p className="not-found-title">404</p>
      <p> {textData.languages[langVar].notFound.sorry}</p>
      <p>{textData.languages[langVar].notFound.refresh}</p>
    </StyledNotFoundPage>
  );
}
