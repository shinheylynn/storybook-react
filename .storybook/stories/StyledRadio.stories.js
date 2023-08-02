import { automateStoriesFromProps, disableArgs } from '../utils';
import StyledRadio from '../../src/components/styled-radio/medistream.jsx';

const componentName = StyledRadio.__docgenInfo.displayName;
const initialTemplate = `<label><${componentName} v-bind="args" /> 선택해주세요</label>`;
const { Playground, value, Val, Width: WidthHeight } = automateStoriesFromProps(StyledRadio, initialTemplate);

const ownArgTypes = {
  value: {
    description: 'value와 Val이 같을 때 선택됩니다.',
    name: 'value (v-model)',
  },
  Val: {
    name: 'Val',
  },
  Name: {
    control: false,
    table: {
      disable: true,
    },
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
  value: 'value',
  modelValue: 'value',
  Val: 'different value',
  Width: 40,
  Height: 40,
  disabled: false,
};

value.args = {
  value: 'value',
  Val: 'different value',
};

value.argTypes = {
  ...value.argTypes,
  Val: {
    table: {
      disable: false,
    },
  },
};

Val.args = {
  value: 'value',
  Val: 'different value',
};
Val.argTypes = {
  ...Val.argTypes,
  Val: {
    table: {
      disable: false,
    },
  },
};

WidthHeight.args = {
  Width: 50,
  Height: 50,
};

WidthHeight.argTypes = {
  ...WidthHeight.argTypes,
  Height: {
    table: {
      disable: false,
    },
  },
  Val: {
    table: {
      disable: false,
    },
  },
  value: {
    table: {
      disable: false,
    },
  },
};

// Docs 탭에 자동생성되는 코드를 이쁘게 만들어주기 위한 추가 작업입니다.
disableArgs([value, Val, WidthHeight], StyledRadio);

export { Playground, value, Val, WidthHeight };

export default {
  title: 'Controls/StyledRadio',
  component: StyledRadio,
  argTypes: { ...ownArgTypes },
};
