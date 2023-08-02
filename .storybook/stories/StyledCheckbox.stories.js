import { automateStoriesFromProps, disableArgs } from '../utils';
import StyledCheckbox from '../../src/components/styled-checkbox/medistream.jsx';

const componentName = StyledCheckbox.__docgenInfo.displayName;
const initialTemplate = `<label><${componentName} v-bind="args"/>선택해주세요</label>`;
const { Playground, value, Disabled, Width: WidthHeight } = automateStoriesFromProps(StyledCheckbox, initialTemplate);

const ownArgTypes = {
  Type: {
    control: {
      type: 'inline-radio',
      default: 'radial',
    },
    options: ['radial', 'square'],
  },
  value: {
    name: 'value (v-model)',
  },
  input: {
    control: false,
    table: {
      disable: true,
    },
  },
};

// Props
Playground.args = {
  value: false,
  modelValue: false,
  Width: 20,
  Height: 20,
  Disabled: false,
};

value.args = {
  value: true,
};

Disabled.args = {
  value: true,
  Disabled: true,
};
Disabled.argTypes = {
  ...Disabled.argTypes,
  value: { control: { disable: false } },
};

// 여러 Prop으로부터 하나의 story를 만들때는 이름에 Prop이름을 모두 포함시킵니다.
WidthHeight.args = {
  Width: 50,
  Height: 50,
  value: true,
};
WidthHeight.argTypes = {
  ...WidthHeight.argTypes,
  Height: {
    control: {
      disable: false,
    },
  },
  value: { control: { disable: false } },
};

// Docs 탭에 자동생성되는 코드를 이쁘게 만들어주기 위한 추가 작업입니다.
disableArgs([value, Disabled, WidthHeight], StyledCheckbox);

export { Playground, value, Disabled, WidthHeight };

export default {
  title: 'Controls/StyledCheckbox',
  component: StyledCheckbox,
  argTypes: { ...ownArgTypes },
};
