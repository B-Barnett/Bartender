import styled from '@emotion/styled';

export const StyledSearch = styled.div`
    form {
        display: flex;
        justify-content: center;
    }
    input {
        background-color: rgba(0,0,0,0);
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-size: 1.25em;
        margin: 0;
        width: 70%;
        &:focus {
            outline: none;
            border-bottom: 2px solid #0048cc;
            transition: .4s ease-in-out;
        }
        ::placeholder {
            color: white;
            opacity: 1;
        }
        :-ms-input-placeholder {
            color: white;
            opacity: 1;
        }
        ::-ms-input-placeholder {
            color: white;
            opacity: 1;
        }
    }
`;