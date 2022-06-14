import styled from '@emotion/styled';

// const breakpoints = [600, 900, 1200, 1536];

// const mq = breakpoints.map(
//     bp => `@media (min-width: ${bp}px)`
// )
const breakpoints = {
    xs: 400, sm: 600, md: 900, lg: 1200, xl: 1536
}
const maxMediaQueries = key => {
    return style => `@media (max-width: ${breakpoints[key]}px) {${style}}`
}
const minMediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}px) {${style}}`
}

export const StyledImgCon = styled.div`
    background-image: url('https://images.pexels.com/photos/4295/black-and-white-alcohol-bar-drinks.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    position: relative;
    top: 0;
    left: 0;
    height: 80vh;
    background-position: top;
    background-repeat: no-repeat;
    z-index: 1;
    ${maxMediaQueries("sm")`
        background-position: inherit;
        height: 100vh;
    `}
    &>div {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background: rgba(21,32,75,.3);
        height: 100%;
        width: 100%;
    }
    h1 {
        font-size: 5em;
        font-weight: 100;
        letter-spacing: 4px;
        margin: 20px 0 0 50px;
        text-transform: uppercase;
        color: white;
        z-index: 1000;
        position: relative;
        ${maxMediaQueries("sm")`
            margin: 40px 0 0 20px;
            font-size: 3em;
        `};
        ${maxMediaQueries("xs")`
            margin: 120px 0 0 10px;
            font-size: 2em;
        `}
    }
    .imgP {
        max-width: 600px;
        font-size: 1.25em;
        letter-spacing: 2px;
        margin: 20px 0 0 50px;
        color: white;
        position: relative;
        z-index: 1000;
        ${maxMediaQueries("sm")`
            margin: 40px 0 0 20px;
        `}
        ${maxMediaQueries("xs")`
            margin: 10px 0 0 10px;
            font-size: .9em;
        `}
    }
}
`;