import {useState} from 'react';
import {IconContext} from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {NavigationData} from './NavigationData';

export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const navigateToPage = path => {
    navigate(path);
    setShowSidebar(false);
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <IconContext.Provider value={{color: 'var(--textcolor)'}}>
        <MenuDiv>
          <MenuOpenButton aria-label="Open menu" onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </MenuOpenButton>
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
                  <NavigateToButton aria-label="Navigate to" onClick={() => navigateToPage(item.path)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavigateToButton>
                </li>
              );
            })}
          </MenuList>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
}

const MenuDiv = styled.div`
  padding: 0.625rem 0 0 0;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const MenuOpenButton = styled.button`
  margin-left: 1.25rem;
  background: none;
  font-size: 1.325rem;
  border: none;
  cursor: pointer;
`;
//------------------------------------------------
const MenuCloseButton = styled.button`
  margin-left: 1.25rem;
  background: none;
  border: none;
  font-size: 1.325rem;
  position: relative;
  right: -8rem;
  top: -1rem;
  cursor: pointer;
`;
const MenuList = styled.ul`
  width: 100%;
  margin-left: 1.25rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  list-style: none;
`;
const MenuItem = styled.li`
  background-color: var(--bgcolor);
  width: 100%;
  height: 80px;
  display: flex;
`;
const NavigateToButton = styled.button`
  background: none;
  border: none;
  color: var(--textcolor);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.925rem;
  cursor: pointer;
  width: 9rem;
  padding: 0.75rem 0rem;
`;
const NavMenu = styled.nav`
  background-color: var(--bgcolor);
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
