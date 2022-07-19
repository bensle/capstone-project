import {useState} from 'react';
import * as MdIcons from 'react-icons/md';
import {TbDots} from 'react-icons/tb';
import {useNavigate, useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {NavigationData} from './NavigationData';

export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = path => {
    navigate(path);
    setShowSidebar(false);
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <MenuDiv>
        <MenuOpenButton aria-label="Open menu" onClick={toggleSidebar}>
          <TbDots />
        </MenuOpenButton>
        <div>ROAM!</div>
      </MenuDiv>
      <NavMenu isOpen={showSidebar}>
        <MenuList role="list" onClick={toggleSidebar}>
          <MenuItem>
            <MenuDiv>
              <MenuCloseButton aria-label="Open menu" onClick={toggleSidebar}>
                <MdIcons.MdClose />
              </MenuCloseButton>
            </MenuDiv>
          </MenuItem>

          {NavigationData.map((item, index) => {
            return (
              <li key={index}>
                <NavigateToButton
                  isActive={location.pathname === item.path}
                  aria-label="Navigate to"
                  onClick={() => navigateToPage(item.path)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavigateToButton>
              </li>
            );
          })}
        </MenuList>
      </NavMenu>
    </>
  );
}

const MenuDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
const MenuOpenButton = styled.button`
  color: var(--textcolor);
  margin-left: 1.25rem;
  margin-top: 1.25rem;
  background: none;
  font-size: 1.325rem;
  border: none;
  cursor: pointer;
`;
const MenuCloseButton = styled.button`
  color: var(--textcolor);
  margin-left: 1.25rem;
  background: none;
  border: none;
  font-size: 1.325rem;
  position: relative;
  right: -8rem;
  top: -1rem;
  cursor: pointer;
  @media (max-height: 315px) {
    top: 1rem;
  }
`;
const MenuList = styled.ul`
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
const MenuItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
`;
const NavigateToButton = styled.button`
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
const NavMenu = styled.nav`
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
