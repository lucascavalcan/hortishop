import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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


