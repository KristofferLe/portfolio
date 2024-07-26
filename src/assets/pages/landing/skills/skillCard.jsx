import React from "react";
import styled from "styled-components";
import theme from "../../../designSystem/colors";
import { useSelector } from "react-redux";

const StyledCard = styled.article`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: rgba(200, 200, 200, 0.5);
  cursor: default;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? theme.dark.accent : theme.light.accent};

    color: white;
  }

  img {
    height: 50px;
    width: 50px;
  }
  h2 {
    font-size: 1rem;
  }
  small {
    font-size: 0.75rem;
  }
`;

export default function SkillCard({ icon, title, level }) {
  const $darkMode = useSelector((state) => state.$darkMode);

  return (
    <StyledCard>
      <img src={icon} alt={`${title} icon`} />
      <h2>{title}</h2>
      <small>{level}</small>
    </StyledCard>
  );
}
