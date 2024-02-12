import styled from "styled-components";

export const StyledProductCard = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  border: dotted 2px ${(props) => (props.$categoria === 1 ? "blue" : "orange")};
  border-radius: 5px;
  border-radius: 5px;
  padding: 1em;
  font-size: 1rem;
  width: 40%;
  margin: 1rem 1px;

  p {
    margin-bottom: 3px;
  }

  img {
    border-radius: 30px;
    object-fit: cover;
    width: 90%;
    height: 200px;
    margin-bottom: 5px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ProductCategory = styled.legend`
  font-size: 1.5rem;
  color: ${(props) => (props.$categoria === 1 ? "blue" : "orange")};
  text-align: justify;
`;
