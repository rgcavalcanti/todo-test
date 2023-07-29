import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --black: #2E3440;
    --grey: #4C566A;
    --white: #D8DEE9;
    --blue: #81A1C1;
    --darkBlue: #5E81AC;
    --green: #A3BE8C;

    --fontTitle: 'Roboto', sans-serif;
    --fontTODO: 'Edu SA Beginner', cursive;
    --fontText: 'Roboto', sans-serif;
  }

  * {
    color: var(--white);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fontText);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--fontTitle);
  }

  body {
    background-color: var(--black);
  }
`;
