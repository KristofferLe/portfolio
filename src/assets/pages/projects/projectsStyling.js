import styled from "styled-components";

const StyledProjectSection = styled.section`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    flex-direction: column;
    flex-wrap: none;
    gap: 1rem;
  }
`;

export { StyledProjectSection };
