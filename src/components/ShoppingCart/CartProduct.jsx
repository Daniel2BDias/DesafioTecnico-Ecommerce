import { StyledProduct } from "./styles";

export default function CartProduct({ productInfo, setCart, cart }) {
  
  function removeFromCart (unique) {
      setCart(cart.filter((p) => p.unique !== unique));
  };

  return (
    <>
      <StyledProduct>
        <img src={productInfo.imagem} />
        <div>
          <p>{productInfo.nome}</p>
          <p>R$ {productInfo.preco.toFixed(2)}</p>
          <p
            onClick={() => removeFromCart(productInfo.unique)}
          >
            Excluir Item
          </p>
        </div>
      </StyledProduct>
    </>
  );
}
