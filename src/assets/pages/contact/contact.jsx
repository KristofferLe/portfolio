import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { LangVariableContext } from "../../contexts/langVariableContext";
import styled from "styled-components";
import ContactForm from "./emailjs/emailjs";
import colors from "../../designSystem/colors.js";
import textData from "../../data/textData.json";

const StyledContactPage = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 4rem;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

const StyledContactSection = styled.section`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  letter-spacing: 1px;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    width: 400px;
    align-self: center;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 600;
    font-size: 2rem;
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export default function ContactPage() {
  const { langVar } = useContext(LangVariableContext);
  const language = useSelector((state) => state.language);
  const $darkMode = useSelector((state) => state.$darkMode);

  return (
    <StyledContactPage $darkMode={$darkMode}>
      <ContactForm />
      <StyledContactSection>
        <h3>
          {textData.languages[langVar].contactForm.sideMessage.one} <br />{" "}
          {textData.languages[langVar].contactForm.sideMessage.two}
        </h3>
      </StyledContactSection>
    </StyledContactPage>
  );
}
