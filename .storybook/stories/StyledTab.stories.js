import React from 'react';
import { StyledTab } from '../../src/components/styled-tab/medistream';
import { automateStoriesFromProps } from '../utils/automateStorybook';

const { Playground, items, size, shape, color, block, animation } = automateStoriesFromProps(StyledTab);

// Prop 값 타입과 입력 UI 를 정의합니다..
const ownArgTypes = {
  items: {
    control: {
      type: 'object',
    },
  },
  size: {
    control: {
      type: 'inline-radio',
    },
    options: ['x-small', 'small', 'medium', 'large', 'x-large'],
  },
  shape: {
    control: {
      type: 'inline-radio',
    },
    options: ['text', 'bar', 'switch', 'tab', 'pill'],
  },
  color: {
    control: {
      type: 'color',
    },
  },
  block: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  animation: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
// Props
Playground.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  size: 'medium',
  shape: 'bar',
  block: false,
  animation: false,
};
items.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
};
size.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  size: 'x-large',
};
shape.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  shape: 'switch',
};
color.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  color: '#1d77ff',
};
block.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  block: true,
};
animation.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  animation: true,
};

export { Playground, items, size, shape, color, block, animation };

export default {
  title: 'Controls/StyledTab',
  component: StyledTab,
  argTypes: { ...ownArgTypes },
};
