import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --bgcolor: #313a40;
    --modalbg: #516069;
    --textcolor: #ffffff;
    --linkcolor: #ffffff;
    --linkcoloractive: #bf4f36;
    --greenish: #04bfad;
    --orange: #d9663d;
    --red: #bf4f36;
    --brown: #8c3a32;
  }

  body {
    padding: 0;
    background-color: var(--bgcolor);
    color: var(--textcolor);
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
  .leaflet-container {
    height: 70vh;
    margin: 20px;
  }
  .custom-popup .leaflet-popup-content-wrapper {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    opacity: 0.85;
  }
`;
