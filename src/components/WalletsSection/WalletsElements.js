import styled from "styled-components";

export const WalletsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WalletSVG = styled.div`
    height: 10vh;
    width: 30vw;
    margin: 20px;
    display: flex;
    cursor: pointer;

    @media screen and (max-width: 780px) {
        width: 50vw;
    }
`;

