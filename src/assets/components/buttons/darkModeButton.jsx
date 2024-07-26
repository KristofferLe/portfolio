import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/features/darkModeSlice";
import styled, { css } from "styled-components";
import { IoMoonOutline as Moon } from "react-icons/io5";
import { CiSun } from "react-icons/ci";

const DarkmodeButtonContainer = styled.div`
  width: 3.5rem;
  height: 1.2rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 5px;
  position: fixed;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  background-color: ${({ $darkMode }) =>
    $darkMode ? "gray" : "rgb(200, 200, 200, .5) "};
  &:hover {
    background-color: ${({ $darkMode }) =>
      $darkMode ? "green " : "rgba(255, 192, 203, .5)"};
  }

  scale: 90%;
  z-index: 999;

  transition: background 0.5s ease;

  .darkModeBtn {
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: ${({ $darkMode }) => ($darkMode ? "white" : "black")};
    background-color: ${({ $darkMode }) => ($darkMode ? "black" : "white")};
    border: solid 2px ${({ $darkMode }) => ($darkMode ? "white" : "black")};
    transform: translateX(-0.3rem);
    ${({ $darkMode }) =>
      $darkMode &&
      css`
        transform: translateX(2rem);
      `}
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;

export default function DarkModeButton() {
  const $darkMode = useSelector((state) => state.$darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <DarkmodeButtonContainer
      $darkMode={$darkMode}
      onClick={handleToggle}
      title="Toggle darkmode button"
      aria-label="Button for toggling dark and lightmode"
      tabIndex={0}
    >
      <button className="darkModeBtn">
        {$darkMode ? <Moon /> : <CiSun />}
      </button>
    </DarkmodeButtonContainer>
  );
}
