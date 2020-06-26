import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';
import './Header.scss';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="flex justify-content-start align-items-center content header">
      <a href="/">
        <img
          alt="Logo"
          className="logo"
          src={logo}
        />
      </a>
      <button className="navigate">
        MetaWeather
      </button>
    </div>
  );
};

export default memo(Header);
