import * as React from 'react';
import { menuItems } from '../menuItems';
import MenuitemsPage from './MenuItems';
interface INavbarProps {
}
const Navbarpage: React.FunctionComponent<INavbarProps> = ({}) => {
   
  return (
    <>
      <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
            <MenuitemsPage
              items={menu}
              key={index}
            />
          );
        })}
      </ul>
    </nav> 
    </>

  );
}

export default Navbarpage;