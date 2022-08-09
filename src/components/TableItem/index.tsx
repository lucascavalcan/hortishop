import * as C from "./style";
import { Fruit } from "../../types/Fruit";
import kiwi from "../../images/kiwi.png";
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    item: Fruit;
}

export const TableItem = ({item}: Props) => {
    return (
        <C.TableLine>
            
            <C.TableColumn> <CloseIcon/> </C.TableColumn>
            <C.TableColumn> <img src={kiwi} width="50" alt=""/> </C.TableColumn>
            <C.TableColumn> {item.name} </C.TableColumn>
            <C.TableColumn> R$13,83 </C.TableColumn>
            <C.TableColumn> {/* quantidade que foi add*/} </C.TableColumn>
            <C.TableColumn> {/* subtotal (quantidade x preço)*/} </C.TableColumn>
            <C.TableColumn> 
                <C.qtArea>
                    <C.qtMenos>-</C.qtMenos>    
                    <C.qtNumber>{/* quantidade que foi add*/}</C.qtNumber>
                    <C.qtMais>+</C.qtMais>
                </C.qtArea> 
            
            </C.TableColumn>

        </C.TableLine>
    );
};