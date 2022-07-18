import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: grid;
  gap: 10px;
  background: var(--bgcolor);
  overflow-y: auto;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;

  @media (min-width: 600px) {
    padding-bottom: 20px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
