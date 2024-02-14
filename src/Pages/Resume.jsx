import styled from "styled-components";
import ProductList from "../components/ProductList/ProductList";
import ProductCard from "../components/ProductCard/ProductCard";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function Resume () {
const { cart } = useContext(CartContext);
    function total () {
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            total+=cart[i].preco;
        }

        return total.toFixed(2);
    }
    return (
        <Main>
        <ProductList>
          {cart.map((p, i) => (
            <ProductCard
              safeguard={true}
              key={i}
              id={p.id}
              categoria={p.categoria_id}
              imagem={p.imagem}
              nome={p.nome}
              preco={p.preco}
              descricao={p.descricao}
            />
          ))}
          <Footer>
          {cart.length === 0 ? "Nada para Pagar!" : <p>Nº de Itens: {cart.length} Total: R$ {total()}</p>}
          {cart.length === 0 ? "" : <button>Pagar!!</button>}
          </Footer>
        </ProductList>
        
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 90dvh;
  margin-top: 10dvh;
  background-color: #cbc3e3;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-track {
      background-color: #cc99ff;
  }
`;

const Footer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  height: 10dvh;
  width: 85%;
  background-color: white;
  bottom: 4.98dvh;

  button {
    width: 30%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: purple;
    font-size: 1rem;
    color: black;

    &:active {
        transform: scale(0.95);
    }
`;