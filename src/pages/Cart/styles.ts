import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Table = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: rgb(238,238,238);
    height: 50px;
    max-width: 1250px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;

`;

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : `auto`}
    padding: 10px 0;
    text-align: left;

`;

export const BackButton = styled.div`
    margin-top:30px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#48d05f;
    color:#FFF;
    display:block;
    cursor:pointer;
    justify-content: flex-start;

    &:hover {
        background-color:#32a345;
    }
`;

export const CleanButton = styled.div`
    margin-top:15px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#f00;
    color:#FFF;
    display:block;
    cursor:pointer;
    justify-content: flex-start;

    &:hover {
        opacity: 0.8;
    }
`;



