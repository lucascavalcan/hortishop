import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Area = styled.div`
    text-align: center;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-left: 20px;

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const Image = styled.div`
    width:200px;
    height:200px;
    background-color:#EEE;
    border-radius:100px;
    box-shadow:0px 10px 50px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    img {
        width:100%;
        height:auto;
    }
`;

export const Add = styled.div`
    width:50px;
    height:50px;
    line-height:50px;
    border-radius:25px;
    background-color:#388bc5;
    text-align:center;
    color:#FFF;
    font-size:22px;
    cursor:pointer;
    margin-top:-25px;
    transition:all ease .2s;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
        background-color:#244c88;
    }
`;

export const Price = styled.div`
    font-size: 15px;
    color: #333;
    margin-top:5px;
`;

export const Title = styled.div`
    font-size:20px;
    font-weight: bold;
    color:#000;
    margin-top:3px;
`;

