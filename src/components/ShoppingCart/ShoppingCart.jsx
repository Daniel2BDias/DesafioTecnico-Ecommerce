import styled from "styled-components";
import CartProduct from "./CartProduct";
import { EmptyMessage, StyledShoppingCart } from "./styles";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart({ cartState, cart, setCart, setCartState }) {
    const navigate = useNavigate();
  
  return (
    <ScrollbarStyles>
      <StyledShoppingCart $cartState={cartState} $cart={cart}>
        {cart.length === 0 ? (
          <EmptyMessage>Carrinho Vazio</EmptyMessage>
        ) : (
          cart.map((p, i) => <CartProduct key={i} productInfo={p} setCart={setCart} cart={cart}/>)
        )}
        {cart.length === 0 ? "" : <button onClick={() => { navigate("/resume"); setCartState(!cartState)}}>Finalizar!</button>}
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
