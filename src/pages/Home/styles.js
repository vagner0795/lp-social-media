import { styled } from "styled-components";
import { colors } from "../../styles/theme.json";
import RocketImage from "../../assets/rocket-bg.png";

// BODY CONFIG
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

// CONTAINER MAIN CONFIG MAX WIDTH 1300PX
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* max-width: 1300px; */
`;

// HOME SECTION CONFIG
export const SectionHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: linear-gradient(180deg, #101645 6.67%, #00dbff 144.48%);
  width: 100vw;

  img {
    width: 1018px;
    height: 850px;
    object-fit: cover;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 70px;
  line-height: 85.33px;
  font-weight: 700;
`;

export const BlueText = styled.span`
  color: ${colors.blue};
  font-weight: 700;
  font-size: 25px;
  line-height: 30.48px;
`;
export const Text = styled.p`
  margin: 20px 0 50px;
  width: 852px;
  height: 242px;
  font-size: 25px;
  line-height: 30.48px;
  font-weight: 700;
  color: ${colors.whiteOpacity70};
`;

// SERVICES SECTION CONFIG
export const SectionServices = styled.div`
  background-image: url(${RocketImage});
  background-position: top;
  background-size: cover;

  position: relative;
  height: 2118px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  gap: 100px;
  z-index: 1;
  margin-top: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2118px;
    background: linear-gradient(
      179.55deg,
      rgba(16, 22, 69, 0.8) 0.39%,
      rgba(0, 219, 255, 0.8) 269.69%
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2118px;
    background: rgba(0, 0, 0, 0);
  }
`;

export const TitleServices = styled.h2`
  z-index: 2;
  background-image: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 50px;
  line-height: 60.95px;
  margin-bottom: 100px;
`;

export const ContainerIcons = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 100px;
`;

export const RadiusBg = styled.div`
  background-color: ${colors.whiteOpacity70};
  width: 263px;
  height: 267px;
  border: 1px solid ${colors.white};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const TextAbout = styled.p`
  margin-top: 150px;
  width: 520px;
  height: 188px;
  font-weight: 700;
  font-size: 25px;
  line-height: 30.48px;
  color: ${colors.white};
`;

export const AboutImage = styled.img`
  width: ${(props) => (props.width ? "" : "100px")};
  height: ${(props) => (props.height ? "" : "100px")};
`;

// SECTION STEPS CONFIG

export const SectionSteps = styled.div`
  z-index: 2;
  height: 552px;
  width: 100%;
  background: linear-gradient(103.83deg, #101645 24.45%, #00dbff 200.53%);
  padding: 50px;
`;

export const TitleSteps = styled.h2`
  font-size: 50px;
  line-height: 60.95px;
  color: transparent;
  background: linear-gradient(270deg, #ffffff 29.94%, #00dbff 102.1%);
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  margin-bottom: 100px;
`;

export const ContainerSteps = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  img {
    width: 97px;
    height: 97px;
  }
`;
export const BoxBg = styled.div`
  width: 333px;
  height: 223px;
  border: 1px solid ${colors.whiteOpacity50};
  background-color: ${colors.whiteOpacity05};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSteps = styled.p`
  font-size: 30px;
  line-height: 36.57px;
  font-weight: bold;
  text-align: center;
`;

// FAQ SECTION CONFIG

export const SectionFaq = styled.div`
  width: 100%;
  height: 1458px;
  background-color: ${colors.dark};
  padding: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    color: ${colors.white};
    font-size: 50px;
    line-height: 60.95px;
    font-weight: 700;
    width: 1476px;
  }

  span {
    background: linear-gradient(180deg, #00dbff 0%, #ffffff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 50px;
    line-height: 60.95px;
    font-weight: 700;
  }
`;

export const ContainerFaq = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  gap: 20px;
`;
export const AcordeonFaq = styled.div`
  width: 60%;
`;

export const ContainerImageFaq = styled.div`
  width: 688px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// FORM CONFIG

export const SectionForm = styled.div`
  width: 100%;
  height: 1009px;
  background: linear-gradient(120.38deg, #0c1138 12.82%, #00dbff 191.47%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;
export const ContainerTitleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    margin: 30px 0;
    width: 100%;
    height: 1px;
    border-color: ${colors.whiteOpacity50};
  }

  h2 {
    text-align: center;
    color: ${colors.white};
    font-size: 50px;
    line-height: 60.95px;
    font-weight: 700;
    width: 1476px;
    width: 700px;
    height: 118px;
  }

  span {
    color: ${colors.blue};
    font-size: 50px;
    line-height: 60.95px;
    font-weight: 700;
  }

  p {
    font-size: 25px;
    font-weight: 300;
  }

  div {
    margin-left: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 57px;
    height: 57px;
  }
`;

//! https://react-hook-form.com/get-started#SchemaValidation

//! Instalar react-hook-form e yup resolve

//! desenvolver o accordion
