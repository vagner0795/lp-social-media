import { styled } from "styled-components";
import { colors } from "../../styles/theme.json";

export const Container = styled.header`
  width: 100%;
  height: 99px;
  padding: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.dark};
`;

export const Image = styled.img`
  width: 333px;
  height: 72px;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled.a`
  color: ${(props) => (props.active ? colors.white : colors.whiteOpacity70)};
  font-size: 23px;
  line-height: 28px;
  font-weight: 700;
  transition: all 700ms ease-in-out;
  padding-bottom: 2px;
  &:hover {
    color: ${colors.white};
  }
`;
