import { useNavigate } from "react-router-dom";
import { ProductImage, StyledButton, StyledParagraph, StyledProduct, Wrapper } from "./styles.js";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext.jsx";

export default function Product ({product, imagem, nome, descricao, preco, categoria}) {
    const navigate = useNavigate();
    const { setCart } = useContext(CartContext);

    function sendToCart (product) {
        product.unique = Math.random(0, 1000000);
        setCart((prev) => [...prev, product]);
        navigate("/");
    };

    return (
        <StyledProduct>
            <ProductImage src={imagem}/>
            <Wrapper>
                <StyledParagraph>Categoria: {categoria === 2 ? "Vestimenta" : "Calçado"}</StyledParagraph>
                <StyledParagraph>Nome: {nome}</StyledParagraph>
                <StyledParagraph>Sobre: {descricao}</StyledParagraph>
                <StyledParagraph>R$ {preco.toFixed(2)}</StyledParagraph>
                <StyledButton onClick={() => sendToCart(product)}>Adicionar ao Carrinho</StyledButton>
            </Wrapper>
        </StyledProduct>
    );
};

