import styled from "styled-components";
import ProductList from "../components/ProductList/ProductList.jsx";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import TextBox from "../components/ProductList/TextBox.jsx";
import { APIcall } from "../services/API.js";

export default function MainPage() {
  const [products, setProducts] = useState(undefined);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts () {
      const response = await APIcall.useAPIgetProducts();
      if(typeof response === 'string'){
        alert(`${response}`);
      }
      setProducts(response.data);
  };

  return (
    <Main>
      {!products ? (
        <TextBox text={"Buscando Items..."} />
      ) : products.length === 0 ? (
        <TextBox text={"Nenhum Item Encontrado"} />
      ) : (
        <ProductList>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              categoria={p.categoria_id}
              imagem={p.imagem}
              nome={p.nome}
              preco={p.preco}
              descricao={p.descricao}
            />
          ))}
        </ProductList>
      )}
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

  ::-webkit-scrollbar {
    width: .5rem
  }

  ::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-track {
      background-color: #cc99ff;
  }
`;
