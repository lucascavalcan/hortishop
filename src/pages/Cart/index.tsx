import * as C from "./styles";
import {useNavigate} from "react-router-dom";
import { Theme } from "../../components/Theme";
import {TableItem} from "../../components/TableItem";

import { Fruit } from "../../types/Fruit";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";

export const Cart = () => {

    const card = UseAppSelector(state => state.cart);

    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
    }
   

    return (
        <Theme>
            <C.Container>
                <C.Table>
                <thead>
                    <tr>
                        <C.TableHeadColumn width={50}></C.TableHeadColumn>
                        <C.TableHeadColumn width={200}></C.TableHeadColumn>
                        <C.TableHeadColumn width={200}>Produto</C.TableHeadColumn>
                        <C.TableHeadColumn width={200}>Preço</C.TableHeadColumn>
                        <C.TableHeadColumn width={200}>Quantidade</C.TableHeadColumn>
                        <C.TableHeadColumn width={200}>Subtotal</C.TableHeadColumn>
                        <C.TableHeadColumn width={200}></C.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>

                    {/* vai dar um map nos produtos que forem adds ao carrinho*/}

                        {card.items.map((item, index)=>(
                            <TableItem key={index} item={item}/>
                        ))}

                        
                </tbody>
                </C.Table>

                <C.BackButton onClick={handleBackButton}>Voltar para o início</C.BackButton>
                <C.CleanButton>Limpar carrinho</C.CleanButton>
            </C.Container>
        </Theme>
    )
}

