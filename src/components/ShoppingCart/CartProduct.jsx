import { StyledProduct } from "./styles";

export default function CartProduct({ productInfo, setCart, cart }) {
 
  return (
    <>
      <StyledProduct>
        <img src={productInfo.imagem} />
        <div>
          <p>{productInfo.nome}</p>
          <p>R$ {productInfo.preco.toFixed(2)}</p>
          <p
            onClick={() => setCart(cart.filter((p) => productInfo.id !== p.id))}
          >
            Excluir Item
          </p>
        </div>
      </StyledProduct>
    </>
  );
}
