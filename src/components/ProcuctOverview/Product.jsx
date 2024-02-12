import { useNavigate } from "react-router-dom";
import { ProductImage, StyledButton, StyledParagraph, StyledProduct, Wrapper } from "./styles.js";

export default function Product ({product, imagem, nome, descricao, preco, categoria, setCart, cart}) {
    const navigate = useNavigate();

    return (
        <StyledProduct>
            <ProductImage src={imagem}/>
            <Wrapper>
                <StyledParagraph>Categoria: {categoria === 2 ? "Vestimenta" : "Calçado"}</StyledParagraph>
                <StyledParagraph>Nome: {nome}</StyledParagraph>
                <StyledParagraph>Sobre: {descricao}</StyledParagraph>
                <StyledParagraph>R$ {preco.toFixed(2)}</StyledParagraph>
                <StyledButton onClick={() => { if(cart.includes(product)) { return }; setCart(prev => [...prev, product]); navigate("/")}}>Adicionar ao Carrinho</StyledButton>
            </Wrapper>
        </StyledProduct>
    );
};

