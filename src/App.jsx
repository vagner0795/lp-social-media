import { Container, SectionHome, Title, Body, Button } from "./components";
import { Header } from "./components/Header";
import HomeImage from "./assets/home-image.png";

const App = () => {
  return (
    <>
      <Body>
        <Container>
          <Header />
          <SectionHome>
            <div>
              <Title>Gestão de Social Media</Title>
              <p>
                Você está pronto para elevar sua presença online e conquistar o
                mundo das redes sociais? Nós, da <span>TECH LEGION</span>, somos
                especialistas em social media e estamos aqui para ajudar você a
                alcançar seus objetivos digitais.
              </p>
            </div>
            <div>
              <img src={HomeImage} alt="Home Image Site" />
            </div>
          </SectionHome>
        </Container>
      </Body>
    </>
  );
};

export default App;
