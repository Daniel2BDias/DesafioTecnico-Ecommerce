import styled from "styled-components";
import CartProduct from "./CartProduct.jsx";
import { EmptyMessage, StyledShoppingCart } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const {cart, setCart, cartState, setCartState} = useContext(CartContext);

  return (
    <ScrollbarStyles>
      <StyledShoppingCart $cartState={cartState} $cart={cart}>
        {cart.length === 0 ? (
          <EmptyMessage>Carrinho Vazio</EmptyMessage>
        ) : (
          cart.map((p, i) => (
            <CartProduct
              key={i}
              productInfo={p}
              setCart={setCart}
              cart={cart}
            />
          ))
        )}
        <ButtonContainer>
          {cart.length === 0 ? (
            ""
          ) : (
            <button
              onClick={() => {
                navigate("/resume");
                setCartState(!cartState);
              }}
            >
              Finalizar!
            </button>
          )}
        </ButtonContainer>
      </StyledShoppingCart>
    </ScrollbarStyles>
  );
}

const ScrollbarStyles = styled.div`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: #cc99ff;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: solid 1px black;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: white;
  opacity: 100;
  max-width: 350px;
  height: 10dvh;
`;
