import {useState} from 'react';
import {IconContext} from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {NavigationData} from './NavigationData';

export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <IconContext.Provider value={{color: '#FFF'}}>
        <MenuDiv>
          <MenuLink to="#">
            <FaIcons.FaBars onClick={toggleSidebar} />
          </MenuLink>
        </MenuDiv>
        <NavMenu isOpen={showSidebar}>
          <MenuList>
            <MenuItem>
              <MenuLinkClose to="#">
                <SpanClose>
                  <MdIcons.MdClose onClick={toggleSidebar} />
                </SpanClose>
              </MenuLinkClose>
            </MenuItem>
            {NavigationData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} onClick={toggleSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
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
const MenuLink = styled(Link)`
  margin-left: 1.25rem;
  background: none;
  font-size: 1.25rem;
`;
//------------------------------------------------
const MenuLinkClose = styled(Link)`
  margin-left: 1.25rem;
  background: none;
  position: relative;
  right: -8rem;
  top: -1rem;
`;
const SpanClose = styled.span`
  font-size: 2rem;
`;
const MenuList = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
const MenuItem = styled.li`
  background-color: var(--bgcolor);
  width: 100%;
  height: 80px;
  display: flex;
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
  a {
    text-decoration: none;
    color: var(--textcolor);
    font-size: 0.925rem;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 10px;
  }
`;
