import * as React from 'react';
import { useState } from 'react';
import MenuItems from './MenuItems';

interface IDropdownmenuProps {
  submenu :ISubmenuPageProps[],
  dropdown:Boolean
}

interface ISubmenuPageProps {
  title: string;
  url: string;
}

const DropdownPage: React.FunctionComponent<IDropdownmenuProps> = ({ submenu,dropdown }:any) => {
  const dropdownClass = 'dropdown-submenu';
  return(<>
   <ul
      className={`dropdown ${dropdownClass} ${ dropdown ? 'show' : ''
      }`}
    >
      {submenu.map((submenu: any, index: any) => (
        <MenuItems
          items={submenu}
          key={index}
        />
      ))}
    </ul> 
  </>) ;
};

export default DropdownPage;
