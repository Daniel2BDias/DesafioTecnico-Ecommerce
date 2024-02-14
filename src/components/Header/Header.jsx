import { useNavigate } from "react-router-dom";
import { HeaderStyles } from "./styles.js";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext.jsx";

 
export default function Header () {
    const navigate = useNavigate();
    const { cartController } = useContext(CartContext);

    
  
    return (
            <HeaderStyles.StyledHeader>
                <HeaderStyles.HomeIcon onClick={() => navigate("/")}/>
                <HeaderStyles.CartIcon onClick={cartController}/>
            </HeaderStyles.StyledHeader>
    );
};