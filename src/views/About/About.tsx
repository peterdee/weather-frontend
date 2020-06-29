import React, { memo } from 'react';

const About: React.FC = () => (
  <div className="flex direction-column content noselect">
    <div>
      This application demonstrates the work of Moleculer microservices.
    </div>
    <div className="margin-top">
      Microservices are used to pull the weather data from <a
        href="https://www.metaweather.com/api/"
      >MetaWeather API</a>, and then stored in the database for the next 4 hours.
    </div>
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
  </div>
);

export default memo(About);
