import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --white: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB2;
    --shape: #FFFFFF;
    --text-button: #FFFFFF;
    --border: 0.25rem;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

    html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  body, input, textarea {
    font-weight: 400;


  h1, h2, h3, h4, h5, h6, strong, button{
    font-weight: 600;
  }

  button {
    cursor: pointer;
    transition: all 300ms ease;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
