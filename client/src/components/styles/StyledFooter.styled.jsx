import styled from '@emotion/styled';

const breakpoints = {
    xs: 400, sm: 600, md: 900, lg: 1200, xl: 1536
}
const maxMediaQueries = key => {
    return style => `@media (max-width: ${breakpoints[key]}px) {${style}}`
}
const minMediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}px) {${style}}`
}

export const StyledFooter = styled.div`
    background-color: #005aff;
    height: 325px;
    width: 100%;
    margin-top: 50px;
    p {
        color: white;
        font-size: 1.5em;
        letter-spacing: .15em;
        margin: 0 0 .5em .5em;
        ${maxMediaQueries("xs")`
            font-size: .85em;
            margin: 1em 0 0 .5em;
        `}
        ${minMediaQueries("xs")`
            font-size: 1em;
            margin: 1em 0 0 1em;
        `}
        ${minMediaQueries("sm")`
            font-size: 1.115em;
            margin: 1em 0 0 2em;
        `}
    }
`