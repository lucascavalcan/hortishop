import * as C from "./styles";
import { useState, useEffect } from "react";
import { Fruit } from "../../types/Fruit";
import foodImage from "../../images/pizza.png";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {setItems} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";


type Props = {
    data: Fruit
}

export const ListItem = ({data}: Props) => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);
    

    function handleAddProdut() {
        dispacth( setItems(data) );
    }

    return (
        <C.Container>
            <C.Area>
                <a>
                    <C.Image><img src={foodImage} width="200" alt=""/></C.Image>
                    <C.Add onClick={handleAddProdut}>+</C.Add>
                </a>
                <C.Price>R$ --</C.Price>
                <C.Title>{data.name}</C.Title>
            </C.Area>
        </C.Container>
    )
}


