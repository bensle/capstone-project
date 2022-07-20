import {useState} from 'react';
import {IoMdMenu} from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import {useNavigate, useLocation} from 'react-router-dom';

import * as Style from './Navigation.Style';
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
      <Style.MenuDiv>
        <Style.MenuOpenButton aria-label="Open menu" onClick={toggleSidebar}>
          <IoMdMenu />
        </Style.MenuOpenButton>
      </Style.MenuDiv>
      <Style.NavMenu isOpen={showSidebar}>
        <Style.MenuList role="list" onClick={toggleSidebar}>
          <Style.MenuItem>
            <Style.MenuDiv>
              <Style.MenuCloseButton aria-label="Open menu" onClick={toggleSidebar}>
                <MdIcons.MdClose />
              </Style.MenuCloseButton>
            </Style.MenuDiv>
          </Style.MenuItem>

          {NavigationData.map((item, index) => {
            return (
              <li key={index}>
                <Style.NavigateToButton
                  isActive={location.pathname === item.path}
                  aria-label="Navigate to"
                  onClick={() => navigateToPage(item.path)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Style.NavigateToButton>
              </li>
            );
          })}
        </Style.MenuList>
      </Style.NavMenu>
    </>
  );
}
