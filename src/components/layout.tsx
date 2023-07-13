import * as React from 'react';
import HeaderPage from './Header';
import { Outlet } from 'react-router-dom';

 interface IlayoutProps {
}
const layout: React.FunctionComponent<IlayoutProps> = (props) => {
  return (
    <>
      <div>
      <HeaderPage />
      <div className="content">
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default layout;