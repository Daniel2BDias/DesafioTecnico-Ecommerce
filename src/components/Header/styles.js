import styled from "styled-components";
import { BiCartAlt } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10dvh;
  border-radius: 0 0 1em 1em;
  background: linear-gradient(
    to right,
    white,
    purple,
    purple,
    purple,
    purple,
    purple
  );
  box-shadow: 3px 2px 5px 1px #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
    
  svg {
    color: black;
    font-size: 3rem;
    
    &:active {
        transform: scale(0.90);
        fill: white;
    }
  }
`;

const CartIcon = styled(BiCartAlt)`
  
`;

const HomeIcon = styled(BiHomeAlt2)`

`;

export const HeaderStyles = { StyledHeader, CartIcon, HomeIcon };
