import React, { useState } from 'react';
import '../../colors/medistream.variables.scss';
import './medistream.scss';
import PropTypes from 'prop-types';

export const StyledSwitch = ({ flag }) => {
  const [isChecked, setIsChecked] = useState(flag);

  const toggleFlagHandler = () => {
    setIsChecked(!isChecked);
  };

  console.log('flag:', flag);
  console.log('isChecked:', isChecked);

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={toggleFlagHandler} />
      <span className="slider"></span>
    </label>
  );
};

StyledSwitch.propTypes = {
  flag: PropTypes.bool,
};
