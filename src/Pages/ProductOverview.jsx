import styled from "styled-components";
import Product from "../components/ProcuctOverview/Product.jsx";
import { useContext, useEffect, useState } from "react";
import { APIcall } from "../services/API.js";
import { useParams } from "react-router-dom";
import TextBox from "../components/ProductList/TextBox.jsx";
import CartContext from "../contexts/CartContext.jsx";

export default function ProductOverview() {
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getproduct(id);
  }, []);

  async function getproduct(id) {
    try {
      const response = await APIcall.useAPIgetProduct(id);
      setProduct(response.data[0]);
    } catch (error) {
      alert(`${error.message}`);
    }
  }

  return (
    <Main>
      {!product ? (
        <TextBox text="Carregando..." />
      ) : (
        <Product
          product={product}
          setCart={setCart}
          cart={cart}
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
