import styled from "styled-components";
import ProductList from "../components/ProductList/ProductList";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Resume ({cart}) {

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
          {cart.length === 0 ? "Nada para Pagar!" : <p>Total: R$ {total()}</p>}
          {cart.length === 0 ? "" : <button>Pagar!!</button>}
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

  button {
    width: 30%;
    heigth: 60px;
    border: none;
    border-radius: 10px;
    background-color: purple;
    color: black;

    &:active {
        transform: scale(0.95);
    }
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