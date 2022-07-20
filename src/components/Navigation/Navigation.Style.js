import styled from 'styled-components';

export const MenuDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  @media (max-height: 600px) {
    flex-wrap: wrap;
  }
`;

export const MenuOpenButton = styled.button`
  color: var(--textcolor);
  margin-left: 1.25rem;
  margin-top: 1.25rem;
  background: none;
  font-size: 1.325rem;
  border: none;
  cursor: pointer;
`;
export const MenuCloseButton = styled.button`
  color: var(--textcolor);
  margin-left: 1.25rem;
  background: none;
  border: none;
  font-size: 1.325rem;
  position: relative;
  right: -8rem;
  top: -1rem;
  cursor: pointer;

  @media (max-height: 600px) {
    top: 1rem;
  }
`;
export const MenuList = styled.ul`
  width: 100%;
  margin-left: 1.25rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  list-style: none;
  @media (min-width: 600px) {
    gap: 0.5rem;
  }
`;
export const MenuItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavigateToButton = styled.button`
  background: var(--bgcolor);
  border: none;
  color: var(--textcolor);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.925rem;
  cursor: pointer;
  width: 10.5rem;
  padding: 0.75rem;
  border-radius: 10px;
  &:hover {
    background: var(--colorAll);
  }

  ${({isActive}) =>
    isActive &&
    `
  color:var(--textcolor);
  background-color:var(--colorAll)
  `}
`;
export const NavMenu = styled.nav`
  background-color: var(--bgcolor);
  overflow-y: auto;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  ${({isOpen}) =>
    isOpen &&
    `
  left: 0;
  transition: 350ms;
  `}
`;
