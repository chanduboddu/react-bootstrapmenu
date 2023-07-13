import React from 'react';
import { BrowserRouter as Router, Link,  Routes , Route } from "react-router-dom";
import MultiLevelMenu from './MenuItems';

import { Container, Tab,Tabs,Nav, Navbar, Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import DropDownSubMenu from './Header';
import Layout from './layout';
import Notfound from './Notfound';
import ProcessingErrors from '../pages/My Preference/Processing Errors/ProcessingErrors';
import MonthlyProcessing from '../pages/My Preference/Monthly Processing Status/MonthlyProcessing';

function App() {
 
  return (
    <>
     <Routes>
          <Route  path="" element={<Layout />}>
            <Route index path="ProcessingErrors" element={<ProcessingErrors />} />
            <Route  path="MonthlyProcessing" element={<MonthlyProcessing />} />
            <Route path="*" element={<Notfound/>} />
        </Route>
        
      </Routes>
      </>
  );
}

export default App;
