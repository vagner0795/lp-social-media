import { styled } from "styled-components";
import { colors } from "../../styles/theme.json";
import RocketImage from "../../assets/rocket-bg.png";

//Body Styles
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

//Container Main Styles
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1300px;
`;

//Home Styles
export const SectionHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

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

//Services Styles
export const SectionServices = styled.div`
  background-image: url(${RocketImage});
  background-position: top;
  background-size: cover;

  position: relative;
  height: 2118px;
  width: 100vw;
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
`;

export const ContainerIcons = styled.div``;
