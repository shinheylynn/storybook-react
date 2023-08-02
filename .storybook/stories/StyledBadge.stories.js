import { automateStoriesFromProps, disableArgs } from '../utils';
import StyledBadge from '../../src/components/styled-badge/medistream.jsx';

// 반복적인 story 생성을 추상화했습니다.
const componentName = StyledBadge.__docgenInfo.displayName;
const initialTemplate = `<${componentName} v-bind="args">NEW</${componentName}>`;
const { Playground, color, size, shape, rounded } = automateStoriesFromProps(StyledBadge, initialTemplate);

// Prop의 기본적인 행위를 정의합니다.
const ownArgTypes = {
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
    options: ['embossed', 'engraved', 'outlined'],
  },
};
// 각 Props 마다 이해하기 좋게 기본 뷰를 임의로 정해줄 수 있습니다.
Playground.args = {
  size: 'x-large',
  shape: 'outlined',
  rounded: false,
};

color.args = {
  color: '#1d77ff',
};
size.args = {
  size: 'x-large',
};
shape.args = {
  shape: 'outlined',
};
rounded.args = {
  rounded: true,
};

disableArgs([color, size, shape, rounded], StyledBadge);

export { Playground, color, size, shape, rounded };

export default {
  title: 'Controls/StyledBadge',
  component: StyledBadge,
  argTypes: { ...ownArgTypes },
};
