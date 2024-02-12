import { useNavigate } from "react-router-dom";
import { HeaderStyles } from "./styles.js";

 
export default function Header () {
    const navigate = useNavigate();
    return (
            <HeaderStyles.StyledHeader>
                <HeaderStyles.HomeIcon onClick={() => navigate("/")}/>
                <HeaderStyles.CartIcon />
            </HeaderStyles.StyledHeader>
    );
};