import * as React from 'react';
import { Container, Tab,Tabs,Nav, Row, Col, Dropdown,NavDropdown, NavLink } from 'react-bootstrap';
import Navbarpage from './Navbar';

interface IHeaderProps {
}

const HeaderPage: React.FunctionComponent<IHeaderProps> = (props) => {
  
 return(<>
  <header>
      <div className="nav-area">
         <Nav.Link as={NavLink} to="/" className="logo">
          Logo
        </Nav.Link >
        <Navbarpage />
      </div>
    </header>
  </>);
};

export default HeaderPage;
