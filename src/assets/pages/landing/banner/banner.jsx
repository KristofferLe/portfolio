import React, { useContext } from "react";
import styled, { css } from "styled-components";
import textData from "../../../data/textData.json";
import theme from "../../../designSystem/colors";
import { useDispatch, useSelector } from "react-redux";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import StyledBannerButtons from "./bannerButtons";
import { MdKeyboardDoubleArrowDown as ArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const BannerContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 500;
  gap: 8px;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.5rem;

  .banner-extra {
    color: rgba(180, 180, 180, 1);
    font-size: 0.9rem;
  }

  #scroll-down-icon {
    margin-top: 50px;
    bottom: 2rem;
    font-size: 2rem;
    color: ${({ $darkMode }) => ($darkMode ? "white" : "black")};
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-items: center;
    ${({ $menuOpen }) => ($menuOpen ? "opacity: 0" : "opacity: 1")};
    &:hover {
      background-color: rgba(200, 200, 200, 0.5);
    }
    transition: color 0.5s ease, background-color 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Banner() {
  const dispatch = useDispatch();
  const $darkMode = useSelector((state) => state.$darkMode);
  const language = useSelector((state) => state.language);
  const $menuOpen = useSelector((state) => state.$menuOpen);
  const { langVar } = useContext(LangVariableContext);

  return (
    <BannerContainer
      className="banner-container"
      $darkMode={$darkMode}
      $menuOpen={$menuOpen}
    >
      <p className="banner-text">{textData.languages[langVar].banner.greet}</p>
      <p className="banner-text">
        {textData.languages[langVar].banner.introduction}
      </p>
      <p className="banner-text">{textData.languages[langVar].banner.role}</p>
      <small className="banner-extra">
        {textData.languages[langVar].banner.extra}
      </small>
      <StyledBannerButtons />
      <AnimatePresence>
        <motion.a
          id="scroll-down-icon"
          href="#skill-section"
          initial={{ y: 100 }}
          animate={{ y: [50, -5, 5, -2, 2, 0] }}
          transition={{
            duration: 2,
            type: "spring",
            loop: Infinity,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          alt="scroll down icon ( an chevron arrow jumping up and down )"
          aria-label="scroll down icon ( an chevron arrow jumping up and down ) click it, and it takes you to the skills section"
        >
          <ArrowDown />
        </motion.a>
      </AnimatePresence>
    </BannerContainer>
  );
}
