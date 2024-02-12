import styled from "styled-components";

export const StyledProductList = styled.section`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  padding-bottom: 10dvh;
  font-size: 1em;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px black;
  width: 90%;
  height: 80dvh;
  overflow-Y: scroll;
  overflow-X: hidden;
`;

export const StyledMessage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-size: 130%;
  box-shadow: 1px 1px 3px 1px black;
  width: 90%;
  height: 80dvh;
`;
