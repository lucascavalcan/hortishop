import * as C from "./styles";
import { useRef, useState, useEffect } from "react";
import { Fruit } from "../../types/Fruit";
import foodImage from "../../images/pizza.png";
import kiwi from "../../images/kiwi.png";
import { Modal } from "../Modal";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {setItems} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";


type Props = {
    data: Fruit
}

export const ListItem = ({data}: Props) => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);

    const [showModal, setShowModal] = useState(false);
    const showOrHide = () => setShowModal(true);
    
    function HandleCloseModal() {
        setShowModal(false);
    }

    function handleAddProdut() {
        dispacth( setItems(data) );
    }


    return (
        <C.Container>
            {showModal ? <Modal closeModal={HandleCloseModal}/> : null}
            <C.Area>
                <a onClick={showOrHide}>
                    <C.Image><img src={kiwi} width="220" alt=""/></C.Image>
                    <C.Add>+</C.Add>
                </a>
                <C.Price>R$13,83</C.Price>
                <C.Title>{data.name}</C.Title>
            </C.Area>
        </C.Container>
    )
}


