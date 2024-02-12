import { StyledProductList } from "./styles.js";

export default function ProductList ({ children }) {
    return (

        <StyledProductList>
            { children }
        </StyledProductList>
    );
};