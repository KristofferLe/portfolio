import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LangVariableContext } from "../../contexts/langVariableContext";
import textData from "../../data/textData.json";
import theme from "../../designSystem/colors";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaGithubSquare as Github } from "react-icons/fa";
import { PiStackOverflowLogoFill as StackOverflow } from "react-icons/pi";
import { FaWhatsappSquare as Whatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiCopyrightLight as Copyright } from "react-icons/pi";
import DarkModeButton from "../../../assets/components/buttons/darkModeButton";
import StyledFooter from "./footerStyling";

export default function Footer() {
  const { langVar } = useContext(LangVariableContext);
  const language = useSelector((state) => state.language);
  const $darkMode = useSelector((state) => state.$darkMode);

  return (
    <StyledFooter $darkMode={$darkMode}>
      <ul className="footer-content">
        <li className="footer-title">
          {textData.languages[langVar].footer.footerContent.top}
        </li>
        <li className="footer-quote">
          {textData.languages[langVar].footer.footerContent.middle}
        </li>

        <ul className="social-media-links">
          <a
            href="https://www.linkedin.com/in/kristofferlettegard/"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/KristofferLe"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <Github />
          </a>
          <a
            href="https://stackoverflow.com/users/22464201/kristoffer"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <StackOverflow />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <Whatsapp />
          </a>
        </ul>
        <li className="copyright">
          <Copyright /> 2024 Kristoffer Lettegard | All Rights Reserved{" "}
        </li>
      </ul>
    </StyledFooter>
  );
}
