import styled from '@emotion/styled';

export const RanButton = styled.button`
    font-size: 16px;
    font-weight: 100;
    padding: 20px;
    position: relative;
    outline: 0;
    border: 3px solid #16204b;
    letter-spacing: .2em;
    border-radius: 100px;
    color: white;
    margin: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:after {
        content: "";
        background-color: #005aff;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 100px;
        z-index: -1;
        top: 5px;
        left: 5px;
        transition: 0.5s;
    }
    &:hover:after {
        background-color: #0048cc;
        top: 0px;
        left: 0px;
    }
`;

export const SearchButton = styled.button`
    outline: 0;
    border: 3px solid #16204b;
    border-radius: 100px;
    margin: 0 0 0 10px;
    padding: .75em .75em .5em .75em;
    background-color: rgba(0, 0, 0, 0);
    position: relative;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    &:after {
        content: "";
        background-color: #005aff;
        border-radius: 100px;
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 5px;
        left: 5px;
        transition: 0.5s;
    }
    &:hover:after {
        background-color: #0048cc;
        top: 0px;
        left: 0px;
    }
    svg {
        color: white;
        font-size: 1.5em;
        position: relative;
    }
`;

export const StyledFooterButton = styled.button`
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: 100;
    padding: 10px 30px 10px 30px;
    position: relative;
    outline: 0;
    border: 3px solid #16204b;
    border-radius: 100px;
    color: white;
    margin: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: all .3s ease;
    &:hover,&:focus {
        background-color: #15204b;
    }
    svg {
        font-size: 1.25em;
        margin: 0 0 0 10px;
    }
`