import React, { memo } from 'react';

const About: React.FC = () => (
  <div className="flex direction-column content">
    <h1 className="noselect">
      About
    </h1>
    <div className="margin-top">
      Source code for the Moleculer microservice, that handles the database connection:
    </div>
    <div>
      <a href="https://github.com/peterdee/moleculer-database">
        https://github.com/peterdee/moleculer-database
      </a>
    </div>
    <div className="margin-top">
      Source code for the Moleculer microservice, that handles the <a
        href="https://www.metaweather.com/api/"
      >MetaWeather API</a> requests:
    </div>
    <div>
      <a href="https://github.com/peterdee/moleculer-metaweather">
        https://github.com/peterdee/moleculer-metaweather
      </a>
    </div>
    <div className="margin-top">
      Source code for this frontend application:
    </div>
    <div>
      <a href="https://github.com/peterdee/weather-frontend">
        https://github.com/peterdee/weather-frontend
      </a>
    </div>
    <div className="margin-top">
      <div className="margin-top text-center">
        <a href="https://github.com/peterdee">
          With ❤ by Pete
        </a>
      </div>
    </div>
  </div>
);

export default memo(About);
