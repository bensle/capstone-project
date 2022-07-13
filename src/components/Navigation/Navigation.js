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
              <MenuLink to="#">
                <MdIcons.MdClose onClick={toggleSidebar} />
              </MenuLink>
            </MenuItem>
            {NavigationData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
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
  /* background-color: black; */
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const MenuLink = styled(Link)`
  margin-left: 1.25rem;
  background: none;
  font-size: 1.25rem;
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 0;
`;
const MenuItem = styled.li`
  background-color: hotpink;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const NavMenu = styled.nav`
  background-color: hotpink;
  width: 250px;
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
  transition: 350ms;`}
`;

// left: 0;
//   transition: 350ms;
