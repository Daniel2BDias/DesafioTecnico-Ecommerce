import styled from "styled-components";
import Product from "../components/ProcuctOverview/Product.jsx";
import { useEffect, useState } from "react";
import { APIcall } from "../services/API.js";
import { useParams } from "react-router-dom";
import TextBox from "../components/ProductList/TextBox.jsx";

export default function ProductOverview({setCart}) {
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    getproduct(id);
  }, []);

  async function getproduct(id) {
    const response = await APIcall.useAPIgetProduct(id);
    if (response.message) {
      alert(`${response.message}`);
    }
    setProduct(response.data[0]);
  }

  return (
    <Main>
      {!product ? (
        <TextBox text="Carregando..." />
      ) : (
        <Product
          product={product}
          setCart={setCart}
          imagem={product.imagem}
          nome={product.nome}
          descricao={product.descricao}
          preco={product.preco}
          categoria={product.categoria_id}
        />
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
`;
