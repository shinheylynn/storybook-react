import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './medistream.scss';
import PropTypes from 'prop-types';

export const StyledRadio = (props) => {
  const { Name, Val, Disabled, Width, Height, value, modelValue } = props;
  const [checkedValue, setCheckedValue] = useState(value || modelValue);
  const isDark = false;

  useEffect(() => {
    setCheckedValue(value || modelValue);
  }, [value, modelValue]);

  const handleRadioChange = (newVal) => {
    setCheckedValue(newVal);
  };

  console.log('checked:', checkedValue, 'val:', Val);
  console.log('disabled:', Disabled); // undefined
  console.log('height:', Height);

  return (
    <span
      className={`'styled-radio' ${isDark ? 'dark' : ''} ${checkedValue === Val ? 'selected' : 'un-selected'} ${
        Disabled ? 'disabled' : ''
      }`}
      style={{ height: `${Height}px`, lineHeight: `${Height}px` }}>
      <input
        type="radio"
        name={Name}
        value={Val}
        checked={checkedValue === Val}
        onChange={() => handleRadioChange(Val)}
        disabled={Disabled}
      />
      {/* CSSTransition for the checked SVG */}
      <CSSTransition in={checkedValue === Val} timeout={300} classNames="bounce" unmountOnExit>
        <svg
          className="selected-icon"
          width={Width}
          height={Height}
          viewBox="0 0 26 26"
          fill={isDark ? '#000' : '#fff'}
          xmlns="http://www.w3.org/2000/svg">
          {checkedValue === Val && (
            <g>
              <circle
                className="out-circle"
                cx="13"
                cy="13"
                r="12.25"
                stroke={isDark ? 'var(--blue-grey-700)' : 'var(--blue-grey-300)'}
                strokeWidth="1.5"
              />
              <circle cx="13" cy="13" r="7" fill={isDark ? 'var(--blue-400)' : 'var(--blue-600)'} />
            </g>
          )}
        </svg>
      </CSSTransition>
      {/* CSSTransition for the unchecked SVG */}
      <CSSTransition in={checkedValue !== Val} timeout={300} classNames="bounce" unmountOnExit>
        <svg
          width={Width}
          height={Height}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="selected-icon">
          <circle
            className="out-circle"
            cx="13"
            cy="13"
            r="12.25"
            stroke={isDark ? 'var(--blue-grey-700)' : 'var(--blue-grey-300)'}
            strokeWidth="1.5"
          />
          <circle cx="13" cy="13" r="7" fill="none" />
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
