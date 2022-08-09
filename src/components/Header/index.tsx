import * as C from "./styles";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
    return (
        <C.Container>
            <C.HeaderLogo>
                <a><p>Horti<span>SHOP</span></p></a>
                <Link to="/cart" ><ShoppingCartIcon className="cartLogo"/></Link>
            </C.HeaderLogo>
        </C.Container>
    )
}