import { styled } from "styled-components";
import { colors } from "../styles/theme.json";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  background: linear-gradient(180deg, #101645 6.67%, #00dbff 144.48%);
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1300px;
`;

export const SectionHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 100px;

  img {
    width: 400px;
    height: 500px;
    object-fit: cover;
  }

  h1 {
    font-size: 50px;
  }

  span {
    color: ${colors.blue};
  }

  p {
    margin: 20px 0 50px;
    width: 100%;
    max-width: 700px;
    font-size: 25px;
  }
`;

export const Button = styled.button`
  width: ${(props) => (props.width ? "" : "120px")};
  height: ${(props) => (props.height ? "" : "40px")};
  border-radius: ${(props) => (props.radius ? "" : "10px")};
  background-color: ${(props) =>
    props.background ? props.background : "#000000"};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin: 20px 0;
  border: none;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;
