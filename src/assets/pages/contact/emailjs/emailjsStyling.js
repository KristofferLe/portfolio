import styled from "styled-components";
import colors from "../../../designSystem/colors";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 350px;

  .form-input,
  .form-button {
    padding: 1rem;
    border: none;
    outline: none;
  }

  .form-input {
    font-size: 1.2rem;
    background: transparent;
    border-bottom: solid 1px gray;
    color: ${({ $darkMode }) =>
      $darkMode ? colors.dark.color : colors.light.color};

    transition: all 0.5s ease;
  }
  p {
    color: red;
  }

  .form-button {
    padding: 1.5rem;
    font-size: 1.3rem;
    border-radius: 8px;
    background: ${({ $darkMode }) =>
      $darkMode ? colors.dark.color : colors.light.color};
    color: ${({ $darkMode }) =>
      $darkMode ? colors.light.color : colors.dark.color};
    cursor: pointer;

    &:hover {
      opacity: 50%;
    }
    transition: all 0.5s ease;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export default StyledContactForm;
