import styled from "styled-components";
import colors from "../../../designSystem/colors.js";

const StyledTemplate = styled.article`
  padding-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-decoration: underline;
  }

  @media screen and (min-width: 1000px) {
    height: 100vh;
    padding-top: 0px;
  }

  .project-info-container,
  .features-container {
    padding: 1rem;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 500;
  }

  .project-info-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;

    .client-container {
      font-size: 1.2rem;
    }

    .project-title {
      font-size: 2rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 0.5rem;
    }

    .tech-item {
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 1.1rem;
      color: white;
      background-color: ${({ $darkMode }) =>
        $darkMode ? colors.dark.accent : colors.light.accent};
      transition: all 0.5s ease;
    }
  }

  .see-live-button {
    padding: 1rem;
    border-radius: 8px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    background-color: ${({ $darkMode }) =>
      $darkMode ? colors.dark.accent : colors.light.accent};
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    &:hover {
      opacity: 70%;
    }
    transition: all 0.5s ease;
  }
`;

export default StyledTemplate;
