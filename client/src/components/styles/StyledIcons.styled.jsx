import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

// export const StyledTipsyIcon = styled(Link)`
//     color: #F7F7F7;
//     display: flex;

//     svg {
//         height: 1.5em;
//         width: 1.5em;
//         margin-right: 1em;
//         cursor: pointer;
//         &:hover,&:focus {
//             color: #5DAA68;
//         }
//     }
// `;

export const StyledFilterIcon = styled.div`
    svg {
        position: absolute;
        z-index: 5;
        right: ${({props}) => (props ? '280px' : '30px')};
        top: 30px;
        color: white;
        font-size: 2em;
        cursor: pointer;
        transition: .5s;
        &:hover {
            color: #0048cc;
        }
        &:focus {
            color: #0048cc;
        }
    }
`;

export const StyledCloseIcon = styled.div`
    svg {
        cursor: pointer;
        color: white;
        margin: 25px 0 20px 0;
        font-size: 2.5em;
        transition: .5s;
        &:hover {
            color: #0048cc;
        }
        &:focus {
            color: #0048cc;
        }
    }
`;

export const StyledFooterIcons = styled(Link)`
svg {
    color: white;
    position: relative;
    font-size: 2em;
    transition: ease-in-out .3s;
    margin: 0 20px 0 20px;
    &:hover,&:focus {
        color: #15204b;
    }
}
`;