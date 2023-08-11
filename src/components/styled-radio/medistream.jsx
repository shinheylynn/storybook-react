import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './medistream.scss';
import PropTypes from 'prop-types';

export const StyledRadio = (props) => {
  const { Name, Val, Disabled, Width, Height, isDark = false, value, modelValue, onChange } = props;

  const [checkedValue, setCheckedValue] = useState(value || modelValue);

  const handleInputChange = (event) => {
    const newVal = event.target.value;
    setCheckedValue(newVal);
    onChange(newVal);
  };

  return (
    <span
      className={`styled-radio ${isDark ? 'dark' : ''} ${checkedValue === Val ? 'selected' : 'un-selected'} ${
        Disabled ? 'disabled' : ''
      }`}
      style={{
        height: `${Height}px`,
        lineHeight: `${Height}px`,
      }}>
      <input
        type="radio"
        name={Name}
        value={Val}
        disabled={Disabled}
        checked={checkedValue === Val}
        onChange={handleInputChange}
      />
      <CSSTransition in={checkedValue === Val} timeout={300} classNames="fade" unmountOnExit>
        <svg
          width={Width}
          height={Height}
          viewBox="0 0 26 26"
          fill={isDark ? '#000' : '#fff'}
          xmlns="http://www.w3.org/2000/svg"
          className="selected-icon">
          {/* SVG content */}
        </svg>
      </CSSTransition>
      <CSSTransition in={checkedValue !== Val} timeout={300} classNames="fade" unmountOnExit>
        <svg
          width={Width}
          height={Height}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="selected-icon">
          {/* SVG content */}
        </svg>
      </CSSTransition>
    </span>
  );
};

StyledRadio.propTypes = {
  Name: PropTypes.string,
  Val: PropTypes.string,
  Disabled: PropTypes.bool,
  Width: PropTypes.number,
  Height: PropTypes.number,
  isDark: PropTypes.bool,
  value: PropTypes.string,
  modelValue: PropTypes.string,
  onChange: PropTypes.func,
};
