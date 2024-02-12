import { useNavigate } from "react-router-dom";
import { HeaderStyles } from "./styles.js";

 
export default function Header ({cartController}) {
    const navigate = useNavigate();
    return (
            <HeaderStyles.StyledHeader>
                <HeaderStyles.HomeIcon onClick={() => navigate("/")}/>
                <HeaderStyles.CartIcon onClick={cartController}/>
            </HeaderStyles.StyledHeader>
    );
};