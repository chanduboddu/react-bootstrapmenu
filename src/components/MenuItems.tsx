import * as React from 'react';
import { BrowserRouter as Router, Link,  Routes , Route } from "react-router-dom";
import { Container, Tab,Tabs,Nav, Navbar, Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import DropdownPage from './Dropdown';

interface IMenuitemsPageProps{
 items :IMenuitemsmainProps
}
interface IMenuitemsmainProps{
  title: string,
  url: string,
  submenu :ISubmenuItemsProps[],
}
interface ISubmenuItemsProps {
  title: string;
  url: string;
}



const MenuitemsPage: React.FunctionComponent<IMenuitemsPageProps> = ({items}) => {
  const [dropdown, setDropdown] = useState(false);

  let myref = useRef<HTMLElement |null>(null);

  // useEffect(() => {
  //   const handler = (event:any) => {
  //     if (
  //       dropdown &&
  //       ref.current &&
  //       !ref.current.contains(event.target)
  //     ) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handler);
  //   document.addEventListener('touchstart', handler);
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener('mousedown', handler);
  //     document.removeEventListener('touchstart', handler);
  //   };
  // }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <>
     <li
      className="menu-items"
      // ref={myref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}
          </button>
          <DropdownPage
            submenu={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
          
          </button>
          <DropdownPage
            submenu={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li> 
    </>
  );
};

export default MenuitemsPage;
