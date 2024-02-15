import styled from "styled-components";
import ProductList from "../components/ProductList/ProductList.jsx";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import TextBox from "../components/ProductList/TextBox.jsx";
import { APIcall } from "../services/API.js";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [products, setProducts] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try
    {
      const response = await APIcall.useAPIgetProducts();
      setProducts(response.data);
    } catch (error) {
      alert(`${error.message}`);
    }  
  }

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
                id={p.id}
                categoria={p.categoria_id}
                imagem={p.imagem}
                nome={p.nome}
                preco={p.preco}
                descricao={p.descricao}
                navigate={navigate}
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
