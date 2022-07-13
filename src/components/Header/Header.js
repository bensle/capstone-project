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
  background-color: hotpink;
  display: block;
`;
