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
    --deleteButton: #ff0000;
    --isFavorite: #ff0000;
  }

  body {
    padding: 0;
    background-color: var(--bgcolor);
    color: var(--textcolor);
    font-family: 'Space Grotesk', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
  .leaflet-container {
    height: 100vh;
    width: auto;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.925rem;
  }
  .custom-popup .leaflet-popup-content-wrapper {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    opacity: 0.85;
    font-size: 0.925rem;
    color: var(--textcolor);
    background: var(--bgcolor);
    font-family: 'Space Grotesk', sans-serif;
    a {
      color: var(--linkcoloractive);
    }
  }
`;
