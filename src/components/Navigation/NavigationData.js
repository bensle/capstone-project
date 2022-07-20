import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import {IoMdHeartEmpty} from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const NavigationData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <IoMdHeartEmpty />,
  },
  {
    title: 'Map',
    path: '/map',
    icon: <FiIcons.FiMap />,
  },
  {
    title: 'AddActivity',
    path: '/addActivity',
    icon: <MdIcons.MdOutlineCreateNewFolder />,
  },
];
