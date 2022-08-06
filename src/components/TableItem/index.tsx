import * as C from "./style";
import { Fruit } from "../../types/Fruit";


type Props = {
    item: Fruit;
}

export const TableItem = ({item}: Props) => {
    return (
        <C.TableLine>
            
            <C.TableColumn> {/* x --> função para excluir produto do carrinho*/} </C.TableColumn>
            <C.TableColumn> {/* mini imagem do produto*/} </C.TableColumn>
            <C.TableColumn> {item.name} </C.TableColumn>
            <C.TableColumn> {/* preço do produto*/} </C.TableColumn>
            <C.TableColumn> {/* quantidade que foi add*/} </C.TableColumn>
            <C.TableColumn> {/* subtotal (quantidade x preço)*/} </C.TableColumn>
            <C.TableColumn> {/* botão para aumentar e diminuir quantidade*/} </C.TableColumn>

        </C.TableLine>
    );
};