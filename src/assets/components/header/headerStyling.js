import styled, { css } from "styled-components";
import theme from "../../designSystem/colors.js";

export const StyledHeader = styled.header`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;

  a {
    text-decoration: none;
    color: ${({ $darkMode }) =>
      $darkMode ? theme.dark.color : theme.light.color};
    opacity: 70%;
    z-index: 999;
    transition: color 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }

  a::after {
    margin-top: 4px;
    content: "";
    display: block;
    height: 1px;
    opacity: 40%;
    background: ${({ $darkMode }) =>
      $darkMode ? theme.dark.color : theme.light.color};
    transition: all 0.5s ease-in-out;
    transform: scaleX(0); /* Set initial scale to 0 */
    transform-origin: center center; /* Set the transform origin to the center */
  }

  a:hover::after {
    width: 100%;
    opacity: 1;
    transform: scaleX(1); /* Scale the element to full width */
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ $darkMode }) =>
      $darkMode ? theme.dark.backgroundColor : theme.light.backgroundColor};
    gap: 4rem;
    transform: ${({ isMobile, $menuOpen }) =>
      isMobile
        ? "translateX(0)"
        : $menuOpen
        ? "translateX(0)"
        : "translateX(-100%)"};
    transition: transform 0.3s ease, background-color 0.5s ease;

    a {
      font-size: 2rem;
    }
  }
`;
