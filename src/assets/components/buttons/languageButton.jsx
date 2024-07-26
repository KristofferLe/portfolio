import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/features/languageSlice";
import styled from "styled-components";
import { CiGlobe } from "react-icons/ci";
import theme from "../../designSystem/colors";
import { motion, AnimatePresence } from "framer-motion";

const StyledLanguageMenu = styled.aside`
  position: fixed;
  display: flex;
  top: .3rem;
  width: 100%;
  justify-content: center;
  font-size: 2rem;
  padding: 5px;
  color: ${({ $darkMode }) => ($darkMode ? theme.dark.text : theme.light.text)};

  .globe {
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
    &:hover {
      background-color: rgba(200,200,200,.5);
    }
  }

  ul {
    width: 100px;
    font-size: 1rem;
    text-align: center;
    list-style-type: none;
    position: absolute;
    right: 50%;
    top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform: translateY(15px) translateX(50px);
  
    li {
      cursor: pointer;
    }
`;

export default function LanguageButton() {
  const [hovering, setHovering] = useState(false);
  const handleHover = () => setHovering(true);
  const handleNoHover = () => setHovering(false);

  const $darkMode = useSelector((state) => state.$darkMode);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <StyledLanguageMenu
      $darkMode={$darkMode}
      role="language"
      aria-label="Menu for changing languages"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={hovering}
      title="Menu for changing languages"
    >
      <CiGlobe className="globe" onClick={handleHover} />
      <AnimatePresence>
        {hovering && (
          <motion.ul
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={handleNoHover}
          >
            <li onClick={() => handleLanguageChange("en")}>
              {language === "en" ? "English" : "Engelska"}
            </li>
            <li onClick={() => handleLanguageChange("sv")}>
              {language === "en" ? "Swedish" : "Svenska"}
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </StyledLanguageMenu>
  );
}
