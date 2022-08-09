import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    background-color: #6ec793;
    height: 150px;
    color: #fff;
    display: flex;
    flex-direction: row;

`;

export const HeaderLogo = styled.span`
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 0;
    font-size: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    span {
        font-weight: bold
    }

    a {
        cursor: pointer;
    }

    .cartLogo {
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        underline: 0;
    }


`;