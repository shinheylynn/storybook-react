import React, { useState } from 'react';
import './medistream.scss';
import '../../colors/medistream.variables.scss';

export const StyledTab = ({
  value = 0,
  modelValue = 0,
  items = ['Tab 1', 'Tab 2', 'Tab 3'],
  size = 'medium',
  shape = 'bar',
  color = '#000',
  block = false,
  animation = true,
}) => {
  return (
    <div>
      <span></span>
    </div>
  );
};
