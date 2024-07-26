import React, { useContext, useState } from "react";
import { LangVariableContext } from "../../contexts/langVariableContext";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { HiOutlineArrowUpRight as Arrow } from "react-icons/hi2";
import { Link } from "react-router-dom";
import colors from "../../designSystem/colors";

const StyledProjectCard = styled(Link)`
  width: 400px;
  height: 800px;
  margin: 10px;
  background-image: url(${(props) => props.$backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 95%;
    border-bottom: solid 1px gray;
  }

  .project-card-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ $darkMode }) =>
      $darkMode ? colors.dark.backgroundColor : colors.light.backgroundColor};
    &:hover {
      background-color: transparent;
    }
    transition: background-color 0.5s ease;

    h1 {
      font-size: 8rem;
      font-weight: 100;
      opacity: 1;
      height: 95%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ $darkMode }) =>
        $darkMode ? colors.dark.color : colors.light.color};
      transition: color 0.5s ease, opacity 0.5s ease-in-out;
      ${({ $isHovering }) =>
        $isHovering &&
        css`
          opacity: 0;
        `}
    }

    .card-info {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 2rem;
      color: ${({ $darkMode }) =>
        $darkMode ? colors.dark.color : colors.light.color};
      ${({ $isHovering }) =>
        $isHovering &&
        css`
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.9) 100%
          );
          color: ${({ $darkMode }) =>
            $darkMode ? colors.light.color : colors.dark.color};
        `}
      span {
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        gap: 0.5rem;
      }

      i {
        font-size: 3rem;
        color: ${({ $darkMode }) =>
          $darkMode ? colors.dark.accent : colors.light.accent};
      }
      transition: color 0.5s ease, background 0.5s ease;
    }
  }
`;

export default function ProjectCard({
  title,
  description,
  number,
  $backgroundImg,
  to,
}) {
  const { langVar } = useContext(LangVariableContext);
  const [$isHovering, $setIsHovering] = useState(false);
  const handleMouseEnter = () => $setIsHovering(true);
  const handleMouseLeave = () => $setIsHovering(false);
  const $darkMode = useSelector((state) => state.$darkMode);
  const language = useSelector((state) => state.language);

  return (
    <StyledProjectCard
      $backgroundImg={$backgroundImg}
      $darkMode={$darkMode}
      language={language}
      $isHovering={$isHovering}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={to}
    >
      <div className="project-card-overlay">
        <h1 className="card-number">{number}</h1>
        <div className="card-info">
          <span>
            <h2>{title}</h2>
            <p>{description}</p>
          </span>
          <i>
            <Arrow />
          </i>
        </div>
      </div>
    </StyledProjectCard>
  );
}
