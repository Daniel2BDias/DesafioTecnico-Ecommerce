import { StyledProductCard, ProductCategory } from "./styles.js";

export default function ProductCard({
  imagem,
  nome,
  descricao,
  preco,
  categoria,
}) {
  return (
    <StyledProductCard $categoria={categoria}>
      <ProductCategory $categoria={categoria}>{categoria === 2 ? "Vestimenta" : "Calçado"}</ProductCategory>
      <img src={imagem} />
      <p>{nome}</p>
      <p>{descricao}</p>
      <p>R$ {preco.toFixed(2)}</p>
    </StyledProductCard>
  );
}
