import styled from "styled-components";

export const StylesButton = styled.a`
  width: ${(props) => (props.width ? "" : "400px")};
  height: ${(props) => (props.height ? "" : "91px")};
  border-radius: ${(props) => (props.radius ? "" : "40px")};
  background-color: ${(props) =>
    props.background ? props.background : "#000000"};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin: 10px 0;
  border: none;
  font-weight: 700;
  font-size: 25px;
  line-height: 30.48px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
