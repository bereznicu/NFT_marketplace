import styled, { createGlobalStyle, css } from 'styled-components';

export const CreateItemsContainer = styled.div`
    name: Container;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    
`;

export const NftForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 640px;
    padding: 40px;
`;

export const PreviewFile = styled.div`
    display: ${({ file }) => (file ? 'flex' : 'none')};

`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0 20px 0;
    border: none;
    outline: none;
    border-bottom: 0.5px solid grey;

    &:focus {
        border-bottom: 2px solid black
    }
`;

export const StyledImg = styled.img`
    height: auto;
    width: auto;
    max-height: 400px;
    max-width: 400px;
`;

export const CreateItemButton = styled.input`
    background-color: #F5F5F5;
    color: black;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;
`;