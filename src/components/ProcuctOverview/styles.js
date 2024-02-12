import styled from "styled-components";

export const StyledProduct = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1em;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px black;
  width: 90%;
  height: 80dvh;

  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 60dvh;
`;

export const ProductImage = styled.img`
    width: 50%;
    max-width: 400px;
    min-width: 200px;
    height: clamp(5vh, 300px, 70dvh);
    margin-left: 10px;
    border-radius: 20px;

    @media (max-width: 1045px) {
      width: 80%;

      @media (max-height: 700px) {
       height: clamp(5dvh, 300px, 30dvh);
        width: 50%;
      }
    }

`;

export const StyledParagraph = styled.p`
    text-align: justify-all;
    font-size: 3rem;

    @media (max-width: 850px) {
      font-size: 1.5rem;
    }

    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;

export const StyledButton = styled.button`
  height: 60px;
  width: 80%;
  max-width: 350px;
  border: none;
  border-radius: 30px;
  background-color: purple;
  font-size: 1rem;
  margin: 10px;

  &:active {
    transform: scale(0.95);
  }
`
