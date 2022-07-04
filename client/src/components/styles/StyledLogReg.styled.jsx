import styled from '@emotion/styled';

const breakpoints = {
    xs: 400, sm: 600, md: 900, lg: 1200, xl: 1536
}
const maxMediaQueries = key => {
    return style => `@media (max-width: ${breakpoints[key]}px) {${style}}`
}

export const StyledLogReg = styled.div`
    background-color: #1B285F;
    text-align: center;
    height: 400px;
    width: 250px;
    margin: 0 auto;
    .logRegTitle {
        color: white;
    }
`