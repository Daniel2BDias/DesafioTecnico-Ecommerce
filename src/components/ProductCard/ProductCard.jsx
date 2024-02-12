import { StyledProductCard, ProductCategory, StyledImage, StyledParagraph } from "./styles.js";

export default function ProductCard({
  safeguard,
  imagem,
  nome,
  descricao,
  preco,
  categoria,
  id, 
  navigate
}) {
  return (
    <StyledProductCard $categoria={categoria} onClick={() => { if(!safeguard) { navigate(`/product/${id}/`) }}}>
      <ProductCategory $categoria={categoria}>{categoria === 2 ? "Vestimenta" : "Calçado"}</ProductCategory>
      <StyledImage src={imagem} />
      <StyledParagraph>{nome}</StyledParagraph>
      <StyledParagraph>{descricao}</StyledParagraph>
      <StyledParagraph>R$ {preco.toFixed(2)}</StyledParagraph>
    </StyledProductCard>
  );
}
