import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "../../designSystem/colors";

const StyledBackgroundWrapper = styled.div`
  background-color: ${({ $darkMode }) =>
    $darkMode ? theme.dark.backgroundColor : theme.light.backgroundColor};
  color: ${({ $darkMode }) =>
    $darkMode ? theme.dark.color : theme.light.color};
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  ul {
    list-style-type: none;
  }
  transition: all 0.5s ease;
`;

export default function BackgroundWrapper({ children }) {
  const $darkMode = useSelector((state) => state.$darkMode);

  return (
    <StyledBackgroundWrapper $darkMode={$darkMode}>
      {children}
    </StyledBackgroundWrapper>
  );
}
