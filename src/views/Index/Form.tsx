import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormProps } from './types';
import './style.scss';

const Form: React.FunctionComponent<FormProps> = ({
  handleForm,
  handleInput,
  isEnabled,
  search,
  suggestions,
}) => (
  <form onSubmit={handleForm}>
    <div className="width100">
      <input
        autoComplete="none"
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Search location"
        type="text"
        value={search}
      />
      { search && search.length > 1 && (
        <div className="suggestions">
          { suggestions.map((item) => (
            <div>
              { item.name }
            </div>
          )) }
        </div>
      ) }
    </div>
    <button
      className="margin-top noselect"
      disabled={!isEnabled}
      type="submit"
    >
      SEARCH
    </button>
  </form>
);

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default memo(Form);
