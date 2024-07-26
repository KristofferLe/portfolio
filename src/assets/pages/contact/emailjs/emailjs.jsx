import React, { useRef, useState, useEffect, useContext } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { LangVariableContext } from "../../../contexts/langVariableContext";
import StyledContactFrom from "./emailjsStyling";
import textData from "../../../data/textData.json";

export default function ContactForm() {
  const { langVar } = useContext(LangVariableContext);
  const language = useSelector((state) => state.language);
  const $darkMode = useSelector((state) => state.$darkMode);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  const [validEmail, setValidEmail] = useState(undefined);

  const handleNameChange = ({ target }) => setNameValue(target.value);
  const handleEmailChange = ({ target }) => setEmailValue(target.value);
  const handleMessageChange = ({ target }) => setMessageValue(target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setIsLoading(true);

    emailjs
      .sendForm("portfolio-website", "template_1kessfx", form.current, {
        publicKey: "tnqUd-Dl4rQt7cK6i",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  useEffect(() => {
    const validEmail = emailRegex.test(emailValue);
    if (validEmail) setValidEmail(true);
  }, [emailValue]);

  return (
    <StyledContactFrom ref={form} onSubmit={sendEmail} $darkMode={$darkMode}>
      <span>
        <label className="form-label label-name" htmlFor="name">
          {textData.languages[langVar].contactForm.labels.name}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={
            textData.languages[langVar].contactForm.placeholders.name
          }
          className="form-input"
          value={nameValue}
          onChange={handleNameChange}
          required
        />
      </span>
      <span>
        <label className="form-label label-name" htmlFor="email">
          {textData.languages[langVar].contactForm.labels.email}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={
            textData.languages[langVar].contactForm.placeholders.email
          }
          className="form-input"
          value={emailValue}
          onChange={handleEmailChange}
          required
        />
        {emailValue && !validEmail && <p>Not a valid email.</p>}
      </span>
      <span>
        {" "}
        <label className="form-label label-email" htmlFor="message">
          {textData.languages[langVar].contactForm.labels.message}
        </label>
        <textarea
          name="message"
          id="message"
          className="form-input"
          placeholder={
            textData.languages[langVar].contactForm.placeholders.message
          }
          value={messageValue}
          onChange={handleMessageChange}
          required
        />
      </span>
      <input
        type="submit"
        value={
          isLoading
            ? textData.languages[langVar].contactForm.labels.loadingButtonText
            : textData.languages[langVar].contactForm.labels.buttonText
        }
        className="form-button"
      />
    </StyledContactFrom>
  );
}
