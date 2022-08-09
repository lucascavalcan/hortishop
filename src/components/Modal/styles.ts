import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color:rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .5s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
`;

export const ModalBody = styled.div`
    width:900px;
    background-color:#FFF;
    border-radius:10px;
    box-shadow:0px 0px 15px #999;
    display:flex;
    margin:20px 0px;
    transition: all ease .5s;
`;

export const FruitBig = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;

    img {
        height:400px;
        width:auto;
    }
`;

export const FruitInfo = styled.div`
    flex:1;
    font-family:'Hepta Slab', Helvetica, Arial;
    padding-bottom:50px;

    h1 {
        margin-top:50px;
    }
`;

export const FruitInfoDesc = styled.div`
    font-size:15px;
    color:#999;
    margin-top:10px;
    font-family:'Lato',Helvetica,Arial;
`;

export const FruitInfoPriceArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: start;
`;

export const FruitInfoSector = styled.div`
    color:#CCC;
    text-transform: uppercase;
    font-size:14px;
    margin-top:30px;
    margin-bottom:10px;
`;

export const FruitInfoActualPrice = styled.div`
    font-size:28px;
    margin-right:30px;
`;

export const FruitInfoAddButton = styled.div`
    margin-top:30px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#48d05f;
    color:#FFF;
    display:inline-block;
    cursor:pointer;
    margin-right:30px;

    &:hover {
        background-color:#32a345;
    }
`;

export const FruitInfoCancelButton = styled.div`
    display:inline-block;
    cursor:pointer;
`;