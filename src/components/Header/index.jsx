import { Container, NavLinks, Link, Image } from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="logo tech legion" />
      <NavLinks>
        <ul>
          <li>
            <Link href="#" active>
              Home
            </Link>
          </li>
          <li>
            <Link href="#">Serviços</Link>
          </li>
          <li>
            <Link href="#">Clientes</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>
      </NavLinks>
    </Container>
  );
}
