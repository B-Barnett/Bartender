import styled from '@emotion/styled';

export const StyledSideNav = styled.div`
    overflow-x: hidden;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100000;
    height: 100vh;
    width: ${({side}) => (side ? '250px' : '0px')};
    background-color: #15204b;
    transition: .5s;
    }
    .filter {
        text-transform: uppercase;
        color: white;
        font-size: 18px;
        padding-left: 10px;
        letter-spacing: .15em;
    }
`;