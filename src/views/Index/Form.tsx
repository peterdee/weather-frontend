import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

type FormProps = {
  handleForm: React.FormEventHandler,
  handleInput: Function,
  search: string,
}

const Form: React.FunctionComponent<FormProps> = ({
  handleForm,
  handleInput,
  search,
}) => (
  <form onSubmit={handleForm}>
    <input
      name="search"
      onChange={(event) => handleInput(event.target.value)}
      placeholder="Search location"
      type="text"
      value={search}
    />
    <button
      className="margin-top"
      type="submit"
    >
      SEARCH
    </button>
  </form>
);

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default memo(Form);
