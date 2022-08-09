import * as C from "./styles";
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export const Footer = () => {
    return (
        <C.Container>
            <div className="title">Formas de pagamento</div>
            <div className="payment">
                <div className="paymentIcon">
                    <PixIcon/>
                    <p>PIX</p>
                </div>
                <div className="paymentIcon">
                    <CreditCardIcon/>
                    <p>Cartão de crédito</p>
                </div>
                <div className="paymentIcon">
                    <AttachMoneyIcon/>
                    <p>Dinheiro</p>
                </div>
            </div>
            <div className="credits">
                <p>
                    Feito com ❤️ <br/>
                    Criado por Lucas Cavalcanti 
                </p>
            </div>
        </C.Container>
    )
}