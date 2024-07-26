import styled from "styled-components";
import theme from "../../designSystem/colors";

const StyledFooter = styled.footer`
  min-height: 400px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;

    .footer-title {
      font-size: 2rem;
      font-weight: 500;
    }

    .footer-quote {
      font-size: 1.2rem;
      font-weight: 400;
      font-style: italic;
    }

    .social-media-links {
      display: flex;
      gap: 0.5rem;
      font-size: 2rem;
    }
  }

  .footer-contact {
    font-size: 1.2rem;

    .footer-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      height: 12rem;
      padding: 2rem;
      border-radius: 0.5rem;
      border-radius: 8px;
      box-shadow: 8px 8px 0px 0px
        ${({ $darkMode }) => ($darkMode ? "white" : "black")};
      transition: box-shadow 0.5s ease;
    }

    .footer-mail-icon {
      font-size: 2rem;
    }
  }

  a {
    color: ${({ $darkMode }) =>
      $darkMode ? theme.dark.accent : theme.light.accent};
    &:hover {
      color: ${({ $darkMode }) =>
        $darkMode ? theme.light.accent : theme.dark.accent};
    }
  }

  .copyright {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default StyledFooter;
