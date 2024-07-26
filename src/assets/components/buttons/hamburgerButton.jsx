import React from "react";
import theme from "../../designSystem/colors";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/features/menuOpenSlice";

const StyledHamburger = styled.aside`
  position: fixed;
  top: 0.5rem;
  right: 1rem;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  z-index: 999;
  cursor: pointer;
  border-radius: 20%;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }

  .bar {
    width: 2rem;
    height: 1px;
    background-color: ${({ $darkMode }) =>
      $darkMode ? theme.light.backgroundColor : theme.dark.backgroundColor};
    transition: all 0.5s ease;
  }

  .bar:first-child {
    ${({ $menuOpen }) =>
      $menuOpen &&
      css`
        transform: rotate(45deg) translateY(7px) translateX(5px);
      `}
  }

  .bar:nth-child(2) {
    ${({ $menuOpen }) =>
      $menuOpen &&
      css`
        opacity: 0;
      `}
  }

  .bar:nth-child(3) {
    ${({ $menuOpen }) =>
      $menuOpen &&
      css`
        transform: rotate(-45deg) translateY(-7px) translateX(5px);
      `}
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Hamburger() {
  const dispatch = useDispatch();
  const $darkMode = useSelector((state) => state.$darkMode);
  const $menuOpen = useSelector((state) => state.$menuOpen);
  const handleClick = () => {
    dispatch(toggleMenu()); // Dispatch the toggleMenu action
  };

  return (
    <StyledHamburger
      $darkMode={$darkMode}
      $menuOpen={$menuOpen}
      onClick={handleClick}
      aria-label="Toggle button for mobile menu"
      tabIndex={0}
      title="Toggle button for mobile menu"
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </StyledHamburger>
  );
}
