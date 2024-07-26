import React, { useContext } from "react";
import styled from "styled-components";
import textData from "../../../data/textData.json";
import { useSelector } from "react-redux";
import { LangVariableContext } from "../../../contexts/langVariableContext";

const StyledAboutSection = styled.section`
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  margin-top: 300px;
  padding: 2rem;
  text-align: center;
  display: grid;
  place-items: center;

  .about-content {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 4rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 320px;
      transform: translateX(-10px);
    }
  }

  .about-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  .about-paragraph {
    font-size: 1.2rem;
    line-height: 1.5;
    width: 100%;
    max-width: 500px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .selfie {
    height: 400px;
    width: 400px;
    border-radius: 50%;
    object-fit: cover;

    @media screen and (max-width: 900px) {
      width: 250px;
      height: 250px;
    }
  }
`;

export default function About() {
  const language = useSelector((state) => state.language);
  const { langVar } = useContext(LangVariableContext);

  return (
    <StyledAboutSection>
      <h1 className="about-title">{textData.languages[langVar].about.title}</h1>
      <div className="about-content">
        <p className="about-paragraph">
          {textData.languages[langVar].about.about}
        </p>
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFp-pmZDSYsZw/profile-displayphoto-shrink_200_200/0/1674332057467?e=1724889600&v=beta&t=o2XCNxDn6kcb5xvNpQPEfOBB8t-omkIU8CCMuqODRfA"
          alt="image of Kristoffer"
          className="selfie"
        />
      </div>
    </StyledAboutSection>
  );
}
