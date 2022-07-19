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
    --bgcolor: #181a21;
    --bgcolorlight: #262a34;
    --bgcolorcard: #262a34;
    --textcolor: #fbfbfc;
    --textcolordarker: #7f7f84;

    --modalbg: #516069;
    --iconTypecolor: #fbfbfc;
    --colorAll: #966bf2;
    --colorShort: #a9bf04;
    --colorMiddle: #276bf2;
    --colorLong: #f2a007;
    --colorsidebar: #171718;

    --linkcolor: #fbfbfc;
    --linkcoloractive: #966bf2;
    --deleteButton: red;
    --isFavorite: red;
    --greenish: #04bfad;
    --orange: #d9663d;
    --red: #bf4f36;
    --brown: #8c3a32;
  }

  body {
    padding: 0;
    background-color: var(--bgcolor);
    color: var(--textcolor);
    font-family: 'Helvetica Neue', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
  .leaflet-container {
    height: 100vh;
    width: auto;
  }
  .custom-popup .leaflet-popup-content-wrapper {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    opacity: 0.85;
    font-size: 0.925rem;
    color: var(--textcolor);
    background: var(--bgcolor);
    a {
      color: var(--linkcoloractive);
    }
  }
`;
