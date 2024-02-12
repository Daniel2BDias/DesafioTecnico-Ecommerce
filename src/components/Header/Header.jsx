import { HeaderStyles } from "./styles.js";
 
export default function Header () {
    return (
            <HeaderStyles.StyledHeader>
                <HeaderStyles.HomeIcon />
                <HeaderStyles.CartIcon />
            </HeaderStyles.StyledHeader>
    );
};