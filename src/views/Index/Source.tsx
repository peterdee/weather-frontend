import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { SourceProps } from './types';
import './style.scss';

const Source: React.FunctionComponent<SourceProps> = ({
  link,
  name,
}) => (
  <div className="source">
    <a href={link}>
      { name }
    </a>
  </div>
);

Source.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(Source);
