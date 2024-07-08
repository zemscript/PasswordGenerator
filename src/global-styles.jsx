import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --fontTitle: 'Montserrat', sans-serif;
        --fontSubtitle: 'Istok Web', sans-serif;
        --fontText: 'Overpass', sans-serif;
        --fontSize12: 1.2rem;
        --fontSize14: 1.4rem;
        --fontSize16: 1.6rem;
        --fontSize18: 1.8rem;
        --colorMain: #0E7E68;
        --colorHover: #0C6B5C;
        --colorActive: #0A594F;
        --colorBackground: #333333;
    }
`;

export default GlobalStyles;
