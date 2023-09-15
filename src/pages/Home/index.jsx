import React from "react";
import {
  Body,
  Container,
  ContainerButtons,
  SectionHome,
  SectionServices,
  Text,
  Title,
  BlueText,
  ContainerIcons,
  TitleServices,
} from "./styles";
import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { colors } from "../../styles/theme.json";
import HomeImage from "../../assets/home-image.png";

const Home = () => {
  return (
    <>
      <Body>
        <Container>
          <Header />
          <SectionHome>
            <div>
              <Title>Gestão de Social Media</Title>
              <Text>
                Você está pronto para elevar sua presença online e conquistar o
                mundo das redes sociais? Nós, da{" "}
                <BlueText>TECH LEGION</BlueText>, somos especialistas em social
                media e estamos aqui para ajudar você a alcançar seus objetivos
                digitais.
              </Text>
              <ContainerButtons>
                <Button background={colors.dark}>
                  Conheça nossos serviços
                </Button>
                <Button background={colors.darkBlue}>
                  Fale com um especialista
                </Button>
              </ContainerButtons>
            </div>
            <img src={HomeImage} alt="Home Image Site" />
          </SectionHome>
        </Container>
        <SectionServices>
          <TitleServices>Por que escolher nossa empresa?</TitleServices>
          <ContainerIcons></ContainerIcons>
        </SectionServices>
      </Body>
    </>
  );
};

export default Home;
