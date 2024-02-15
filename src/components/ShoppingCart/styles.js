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
    border: solid 1px black;
    text-align: center;
    width: 100%;
    max-width: 350px;
    height: 90dvh;
    padding: 15px;
    padding-bottom: 10dvh;
    overflow-Y: scroll;
    overflow-X: hidden;
    
    transition: ${props => props.$cartState ? "opacity 1.65s, z-index .2s" : "opacity 0.7s, z-index 1.65s"};

    button {
        width: 60%;
        height: 50px;
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
    width: 100%;
    justify-content: center;
    border: solid 1px black;
    border-radius: 10px;
    align-items: center;
    margin: 10px;
    text-align: center;

    p {
        margin: 10px;
    }

    p:last-child {
        color: red;
        
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1.5rem;
    }

    img {
        border-radius: 10px;
        margin: 15px;
        width: 50%;
        height: 140px;
    }
`