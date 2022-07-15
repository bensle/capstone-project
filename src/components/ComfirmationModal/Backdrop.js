import styled from 'styled-components';
export default function Backdrop(props) {
  return <BackdropDiv onClick={props.onClick}></BackdropDiv>;
}

const BackdropDiv = styled.div`
  position: fixed;
  backdrop-filter: blur(5px);
  background-color: transparent;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
