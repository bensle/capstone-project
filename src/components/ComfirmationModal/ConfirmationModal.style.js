import styled from 'styled-components';
export const CancelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--bgcolorcard);
  padding: 7px 7px;
  text-align: center;
  z-index: 3000;
  position: absolute;
  width: 100vw;
  top: 20vh;
  left: 0;
  right: 0;
  bottom: auto;
`;

export const Heading = styled.h2`
  font-size: 0.925rem;
  margin: 20px 0;
`;
export const Span = styled.span`
  color: var(--deleteButton);
  font-size: 0.925rem;
  font-weight: 400;
`;

export const DelP = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;
export const ButtonConfirmation = styled.button`
  margin-bottom: 20px;
  width: 50%;
  border: none;
  align-self: center;
  background-color: var(--colorAll);
  border-radius: 10px;
  color: var(--textcolor);
  padding: 7px 7px;
  font-size: 0.925rem;
  &:hover {
    background-color: var(--textcolor);
    color: var(--deleteButton);
  }
`;
export const ButtonCancel = styled.button`
  margin-bottom: 20px;
  width: 50%;
  border: none;
  align-self: center;
  background-color: var(--colorAll);
  border-radius: 10px;
  color: var(--textcolor);
  padding: 7px 7px;
  font-size: 0.925rem;
  &:hover {
    background-color: var(--textcolor);
    color: var(--colorAll);
  }
`;
