import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import textData from "../../../data/textData.json";
import { useSelector, useDispatch } from "react-redux";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import { MdOutlineChevronRight as ChevronRight } from "react-icons/md";
import theme from "../../../designSystem/colors";

const StyledBannerButtons = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;

  .banner-btn {
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ $darkMode }) =>
      $darkMode ? theme.dark.color : theme.light.color};
    font-size: 1rem;
    transition: all 0.5s ease;

    background-image: linear-gradient(
      to right,
      ${({ $darkMode }) => ($darkMode ? theme.dark.accent : theme.light.accent)}
        50%,
      transparent 50%
    );
    background-position: 100% 0%;
    background-size: 200% 100%;

    &:hover {
      background-position: 0% 0%;
      color: ${({ $darkMode }) =>
        $darkMode ? theme.dark.color : theme.dark.color};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export default function BannerButtons() {
  const language = useSelector((state) => state.language);
  const $darkMode = useSelector((state) => state.$darkMode);
  const { langVar } = useContext(LangVariableContext);

  return (
    <StyledBannerButtons $darkMode={$darkMode}>
      <Link
        to="/projects"
        className="banner-btn"
        aria-label="Link to the projects section"
      >
        <p>{textData.languages[langVar].banner.toProject}</p>
        <ChevronRight alt="arrow pointing to the right" />
      </Link>
      <Link
        to="/contact"
        className="banner-btn"
        aria-label="Link to the contact section"
      >
        <p>{textData.languages[langVar].banner.toContact}</p>
        <ChevronRight alt="arrow pointing to the right" />
      </Link>
    </StyledBannerButtons>
  );
}
