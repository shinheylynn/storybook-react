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

const size = (props) => React.createElement(StyledButton, { size: props.size });
size.args = {
  size: 'x-large',
};

const width = (props) => React.createElement(StyledButton, { width: props.width });
width.args = {
  width: 200,
};

const color = (props) => React.createElement(StyledButton, { color: props.color });
color.args = {
  color: 'secondary',
};

const outlined = (props) => React.createElement(StyledButton, { outlined: props.outlined });
outlined.args = {
  outlined: true,
};

const disabled = (props) => React.createElement(StyledButton, { disabled: props.disabled });
disabled.args = {
  disabled: true,
};

const loading = (props) => React.createElement(StyledButton, { loading: props.loading });
loading.args = {
  loading: true,
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
