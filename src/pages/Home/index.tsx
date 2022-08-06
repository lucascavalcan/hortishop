import { useState, useEffect } from "react";
import * as C from "./styles";
import { api } from "../../api";
import { Theme } from "../../components/Theme";
import { ListItem } from "../../components/ListItem";
import { Fruit } from "../../types/Fruit";
import {Link} from "react-router-dom";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {setItems} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";

export const Home = () => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);

    const [fruits, setFruits] = useState<Fruit[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        loadFruits()
      },[]);

    async function loadFruits() {
        setLoading(true)
        let json = await api.getAllFruits()
        setLoading(false);
        setFruits(json);
    }



    return (
        <Theme>
            <C.Container>
                <div>
                    {loading &&
                        <div>Carregando...</div>
                    }

                    {!loading && fruits.length > 0 &&
                        <>
                        <div className="ListItem">
                            {fruits.map((item, index)=>(
                                <ListItem data={item} key={index}/>
                            ))}
                        </div>
                        <Link to="/cart">Carrinho</Link>
                        </>
                    }
                    
                </div>
            </C.Container>
        </Theme>
    )
}