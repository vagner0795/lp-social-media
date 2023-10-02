import styled from "styled-components";
import { colors } from "../../styles/theme.json";

export const ContainerForm = styled.div`
  input {
    width: 591px;
    height: 59px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: ${colors.greyOpacity20};
    outline: none;
    border: none;
    padding-left: 10px;
    color: ${colors.white};

    &::placeholder {
      color: ${colors.white};
    }
  }

  button {
    width: 180px;
    height: 40px;

    background-color: ${colors.darkBlue};
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
  }

  p {
    color: red;
    margin-bottom: 10px;
  }
`;
