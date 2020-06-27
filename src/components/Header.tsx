import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';
import './Header.scss';

/**
 * Header component
 */
const Header: React.FC = () => {
  const history = useHistory();
  const { pathname = '/' } = useLocation();

  return (
    <div className="flex justify-content-start align-items-center content noselect">
      <a href="/">
        <div className="logo">
          <img
            alt="Logo"
            className="logo"
            src={logo}
          />
        </div>
      </a>
      <button
        className={`navigate margin-left ${pathname === '/' && 'active'}`}
        onClick={() => history.push('/')}
      >
        WEATHER
      </button>
      <button
        className={`navigate margin-left ${pathname === '/about' && 'active'}`}
        onClick={() => history.push('/about')}
      >
        ABOUT
      </button>
    </div>
  );
};

export default memo(Header);
