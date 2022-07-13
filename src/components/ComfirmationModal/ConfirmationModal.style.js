import styled from 'styled-components';
export const ButtonConfirmation = styled.button`
  color: red;
`;
export const ButtonCancel = styled.button`
  color: red;
`;

export const CancelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  border: 2px solid white;
  border-radius: 6px;
  background-color: var(--modalbg);
  padding: 0.8rem;
  text-align: center;
  /* z-index: 10; */
  position: fixed;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: auto;
  @media (min-width: 600px) {
    position: absolute;
    top: 25%;
    left: 25%;
    right: auto;
    width: 50%;
  }
`;
