import styled from 'styled-components';

import Navigation from '../Navigation/Navigation';
export default function Header() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--bgcolor);
  z-index: 2000;
  border-bottom: solid 2px white;
  padding: 0 0 0.625rem 0;
  display: grid;
`;
