import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './medistream.scss';
import PropTypes from 'prop-types';

export const StyledRadio = (props) => {
  const { Name, Val, Disabled, Width, Height, value, modelValue } = props;
  const isDark = false;
  const [checkedValue, setCheckedValue] = useState(props.value || props.modelValue);

  return (
    <span className={`styled-radio ${checkedValue === Val ? 'selected' : 'un-selected'} ${Disabled ? 'disabled' : ''}`}>
      <input type="radio" />
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
