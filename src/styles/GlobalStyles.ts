import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.3s ease;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
