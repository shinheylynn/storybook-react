import React from 'react';
import { StyledButton } from '../../src/components/styled-button/medistream';

const Playground = (props) => React.createElement(StyledButton, props);
Playground.args = {
  width: 'auto',
  size: 'medium',
  color: 'primary',
  outlined: false,
  disabled: false,
  loading: false,
};

const size = Playground.bind({});
size.args = {
  size: 'x-large',
};
// 사용하지 않을 Prop의 경우 아래와 같이 설정해줍니다.
// 변수명과 동일한 Prop을 제외한 나머지 Prop은 control과 table에서 사용하지 않도록 해줍니다.
size.argTypes = {
  width: { table: { disable: true } },
  color: { table: { disable: true } },
  outlined: { table: { disable: true } },
  disabled: { table: { disable: true } },
  loading: { table: { disable: true } },
  Type: { table: { disable: true } },
};

const width = Playground.bind({});
width.args = {
  width: 200,
};
width.argTypes = {
  size: { table: { disable: true } },
  color: { table: { disable: true } },
  outlined: { table: { disable: true } },
  disabled: { table: { disable: true } },
  loading: { table: { disable: true } },
  Type: { table: { disable: true } },
};

const color = Playground.bind({});
color.args = {
  color: 'secondary',
};
color.argTypes = {
  width: { table: { disable: true } },
  size: { table: { disable: true } },
  outlined: { table: { disable: true } },
  disabled: { table: { disable: true } },
  loading: { table: { disable: true } },
  Type: { table: { disable: true } },
};

const outlined = Playground.bind({});
outlined.args = {
  outlined: true,
};
outlined.argTypes = {
  width: { table: { disable: true } },
  color: { table: { disable: true } },
  size: { table: { disable: true } },
  disabled: { table: { disable: true } },
  loading: { table: { disable: true } },
  Type: { table: { disable: true } },
};

const disabled = Playground.bind({});
disabled.args = {
  disabled: true,
};
disabled.argTypes = {
  width: { table: { disable: true } },
  color: { table: { disable: true } },
  outlined: { table: { disable: true } },
  size: { table: { disable: true } },
  loading: { table: { disable: true } },
  Type: { table: { disable: true } },
};

const loading = Playground.bind({});
loading.args = {
  loading: true,
};
loading.argTypes = {
  width: { table: { disable: true } },
  color: { table: { disable: true } },
  outlined: { table: { disable: true } },
  disabled: { table: { disable: true } },
  size: { table: { disable: true } },
  Type: { table: { disable: true } },
};

// Prop 값 타입과 입력 UI 를 정의합니다.
const ownArgTypes = {
  width: {
    control: {
      type: 'number',
    },
  },
  size: {
    control: {
      type: 'inline-radio',
    },
    options: ['x-small', 'small', 'medium', 'large', 'x-large'],
  },
  color: {
    control: {
      type: 'inline-radio',
    },
    options: ['primary', 'secondary', 'grey', 'yellow'],
  },
  outlined: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  loading: {
    control: {
      type: 'boolean',
    },
  },
  Type: {
    control: {
      type: 'inline-radio',
    },
    options: ['button', 'submit', 'reset'],
  },
  // 사용하지 않을 Prop의 경우 아래와 같이 설정해줍니다.
  // View에 영향을 끼치지 않거나 변경하지 않을 Prop을 control과 table에서 사용하지 않도록 해줍니다.
  to: {
    table: {
      disable: true,
    },
    control: false,
  },
  HeightUnit: {
    table: {
      disable: true,
    },
    control: false,
  },
  PaddingUnit: {
    table: {
      disable: true,
    },
    control: false,
  },
  FontSizeUnit: {
    table: {
      disable: true,
    },
    control: false,
  },
  FontWeightUnit: {
    table: {
      disable: true,
    },
    control: false,
  },
  BorderRadiusUnit: {
    table: {
      disable: true,
    },
    control: false,
  },
};

export { Playground, size, width, color, outlined, disabled, loading };

export default {
  title: 'Controls/StyledButton',
  component: StyledButton,
  argTypes: { ...ownArgTypes },
};
