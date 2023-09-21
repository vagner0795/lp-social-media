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
  RadiusBg,
  TextAbout,
  AboutImage,
  SectionSteps,
  ContainerSteps,
  TitleSteps,
  BoxBg,
  TextSteps,
  SectionFaq,
  ContainerFaq,
  AcordeonFaq,
  ContainerImageFaq,
  SectionForm,
  ContainerTitleForm,
  ContainerForm,
} from "./styles";
import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { colors } from "../../styles/theme.json";
import HomeImage from "../../assets/home-image.png";
import CheckIcon from "../../assets/about-image1.png";
import PeopleIcon from "../../assets/about-image2.png";
import ArrowIcon from "../../assets/about-image3.png";
import DesktopIcon from "../../assets/about-image4.png";
import ArrowStepImg from "../../assets/doble-arrow.png";
import FaqImg01 from "../../assets/faq-image1.png";
import FaqImg02 from "../../assets/faq-image2.png";
import FormIcon from "../../assets/arrow-form.png";

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
          <ContainerIcons>
            <div>
              <RadiusBg>
                <AboutImage
                  width={"140px"}
                  height={"140px"}
                  src={CheckIcon}
                  alt="icon"
                />
              </RadiusBg>
              <TextAbout>
                Experiência Comprovada: Nossa equipe possui anos de experiência
                em gerenciamento de redes sociais para diversas marcas e
                empresas. Sabemos o que é necessário para construir uma presença
                forte e impactante nas redes.
              </TextAbout>
            </div>
            <div>
              <RadiusBg>
                <AboutImage
                  width={"66px"}
                  height={"83px"}
                  src={PeopleIcon}
                  alt="icon"
                />
              </RadiusBg>
              <TextAbout>
                Copy Estratégias Personalizadas: Entendemos que cada cliente é
                único e merece uma abordagem personalizada. Criamos estratégias
                sob medida para atender às necessidades específicas do seu
                negócio.
              </TextAbout>
            </div>
            <div>
              <RadiusBg>
                <AboutImage
                  width={"92px"}
                  height={"92px"}
                  src={ArrowIcon}
                  alt="icon"
                />
              </RadiusBg>
              <TextAbout>
                Engajamento do Público: Nosso foco está em construir
                relacionamentos genuínos com o seu público. Através de conteúdo
                relevante e interações autênticas, aumentamos o engajamento com
                sua marca.
              </TextAbout>
            </div>
            <div>
              <RadiusBg>
                <AboutImage
                  width={"115px"}
                  height={"115px"}
                  src={DesktopIcon}
                  alt="icon"
                />
              </RadiusBg>
              <TextAbout>
                Acompanhamento e Análise: Monitoramos constantemente o
                desempenho das suas campanhas nas redes sociais e fornecemos
                relatórios detalhados. Isso nos permite otimizar as estratégias
                e garantir resultados ainda melhores.
              </TextAbout>
            </div>
          </ContainerIcons>
        </SectionServices>
        <SectionSteps>
          <TitleSteps>Etapas dos serviços que a Tech Legion oferece</TitleSteps>
          <ContainerSteps>
            <BoxBg>
              <TextSteps>Dashboard em tempo real</TextSteps>
            </BoxBg>
            <img src={ArrowStepImg} alt="icon arrow" />
            <BoxBg>
              <TextSteps>Agendamento de posts</TextSteps>
            </BoxBg>
            <img src={ArrowStepImg} alt="icon arrow" />
            <BoxBg>
              <TextSteps>Monitoramento de redes sociais</TextSteps>
            </BoxBg>
            <img src={ArrowStepImg} alt="icon arrow" />
            <BoxBg>
              <TextSteps>Monitoramento de redes sociais</TextSteps>
            </BoxBg>
          </ContainerSteps>
        </SectionSteps>
        <SectionFaq>
          <h2>
            PERGUNTAS FREQUENTES SOBRE O SERVIÇOS DE <span>SOCIAL MEDIA</span>
          </h2>
          <ContainerFaq>
            <AcordeonFaq>
              <h1 style={{ textAlign: "center" }}>FAQ</h1>
            </AcordeonFaq>
            <ContainerImageFaq>
              <img src={FaqImg01} alt="FAQ image 01" />
              <img src={FaqImg02} alt="FAQ image 02" />
            </ContainerImageFaq>
          </ContainerFaq>
        </SectionFaq>
        <SectionForm>
          <ContainerTitleForm>
            <h2>
              Solicitar contato para serviço de <span>Social Media</span>
            </h2>
            <hr />
            <p>Para solicitar contato, preencha o formulário ao lado</p>
            <div>
              <img src={FormIcon} alt="Form Icon" />
            </div>
          </ContainerTitleForm>
          <ContainerForm>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Button background="yellow" width="250px" height="70px">
              Enviar
            </Button>
          </ContainerForm>
        </SectionForm>
      </Body>
    </>
  );
};

export default Home;
