import styled from "styled-components";

export const Container = styled.div`
    height: 250px;
    background-color: #6ec793;
    margin-top: 50px;
    color: #fff;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .title {
        font-weight: bold;
        font-size: 20px;
        margin-left: -35px;
    }

    .payment {
        display: flex;
        width: 500px;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        margin-top: 25px;

        .paymentIcon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                margin-top: 0;
            }
        }

    }

    .credits {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-direction: start;
        margin-top: 50px;
        padding: 0;
        color: #333;
        font-size: 13px;
        border-top: 0.8px solid #ccc;

        p {
            margin-left: 20px;
        }


    }
`;