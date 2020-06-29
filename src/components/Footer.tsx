import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

import './Footer.scss';

/**
 * Footer component
 */
const Footer: React.FC = () => {
  const [database, setDatabase] = useState({
    class: 'offline',
    title: 'Offline',
  });
  const [metaweather, setMetaweather] = useState({
    class: 'offline',
    title: 'Offline',
  });

  useEffect(
    () => {
      setDatabase({
        class: 'loading',
        title: 'Loading',
      });
      setMetaweather({
        class: 'loading',
        title: 'Loading',
      });
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_DATABASE_MS}/api/ping`,
      }).then(() => setDatabase({
        class: 'online',
        title: 'Online',
      }))
      .catch(() => setDatabase((state) => ({
        class: 'offline',
        title: 'Offline',
      })));
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_METAWEATHER_MS}/api/ping`,
      }).then(() => setMetaweather({
        class: 'online',
        title: 'Online',
      }))
      .catch(() => setMetaweather((state) => ({
        class: 'offline',
        title: 'Offline',
      })));
    },
    [],
  );

  return (
    <div className="flex justify-content-center align-items-center footer noselect">
      <div className="flex align-items-center">
        <a
          href="https://github.com/peterdee"
        >Peter Dyumin</a>, { new Date().getFullYear() }
      </div>
      <div className="flex align-items-center margins">
        Database status:
        <div
          className={`status pointer ${database.class}`}
          title={database.title}
        />
      </div>
      <div className="flex align-items-center">
        Weather status: <div
          className={`status pointer ${metaweather.class}`}
          title={metaweather.title}
        />
      </div>
    </div>
  );
};

export default memo(Footer);
