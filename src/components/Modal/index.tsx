import * as C from "./styles";
import kiwi from "../../images/kiwi.png";
import { useNavigate } from "react-router-dom";


type Props = {
    closeModal: () => void;
}

export const Modal=  ({closeModal}: Props) => {

    return(
        <C.Container>
            <C.ModalBody>
                <C.FruitBig>
                    <img src={kiwi} alt=""/>
                </C.FruitBig>

                <C.FruitInfo>
                    <h1>--</h1>
                    <C.FruitInfoDesc>
                        Carboidratos: -- <br/>
                        Proteínas: -- <br/>
                        Gordura: -- <br/>
                        Calorias: -- <br/>
                        Açúcar: -- 

                    </C.FruitInfoDesc>

                    <C.FruitInfoPriceArea>
                        <C.FruitInfoSector>Preço</C.FruitInfoSector>
                        <C.FruitInfoActualPrice>R$13,83</C.FruitInfoActualPrice>
                    </C.FruitInfoPriceArea>

                    <C.FruitInfoAddButton>Adicionar ao carrinho</C.FruitInfoAddButton>
                    <C.FruitInfoCancelButton onClick={closeModal}>Cancelar</C.FruitInfoCancelButton>

                </C.FruitInfo>
            </C.ModalBody>
        </C.Container>
    )
}


