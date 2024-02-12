import { ProductImage, StyledButton, StyledParagraph, StyledProduct, Wrapper } from "./styles.js";

export default function Product ({product, imagem, nome, descricao, preco, categoria, setCart}) {
    
    return (
        <StyledProduct>
            <ProductImage src={imagem}/>
            <Wrapper>
                <StyledParagraph>Categoria: {categoria === 2 ? "Vestimenta" : "Calçado"}</StyledParagraph>
                <StyledParagraph>Nome: {nome}</StyledParagraph>
                <StyledParagraph>Sobre: {descricao}</StyledParagraph>
                <StyledParagraph>R$ {preco.toFixed(2)}</StyledParagraph>
                <StyledButton onClick={() => setCart(prev => [...prev, product])}>Adicionar ao Carrinho</StyledButton>
            </Wrapper>
        </StyledProduct>
    );
};

