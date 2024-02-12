import styled from "styled-components";

export const StyledShoppingCart = styled.div`
    position: fixed;
    right: 0;
    top: 10;
    display: flex;
    opacity: ${props => props.$cartState ? "100" : "0"};
    z-index: ${props => props.$cartState ? "1" : "-1"};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-radius: 20px 0 0 20px;
    text-align: center;
    width: 100%;
    max-width: 350px;
    height: 90dvh;
    padding: 15px;
    overflow-Y: scroll;
    overflow-X: hidden;
    
    transition: opacity 0.5s, z-index 1s;

    button {
        width: 60%;
        height: 60px !important;
        border-radius: 15px;
        border: none;
        color: black;
        background-color: purple;

        &:active {
            transform: scale(0.95);
        }
    }
`;

export const EmptyMessage = styled.p`
    width: 100%;
    height: 100px;

    font-size: 2rem;
`;

export const StyledProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1.5rem;
    }

    img {
        border-radius: 10px;
    }
`