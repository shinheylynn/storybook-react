import StyledButton from '../../src/components/styled-button/medistream.jsx';
import { automateStoriesFromProps, disableArgs } from '../utils';

// 반복적인 story 생성을 추상화했습니다.
const componentName = StyledButton.__docgenInfo.displayName;
const initialTemplate = `<${componentName} v-bind="args"/>`;
const { Playground, size, width, color, outlined, disabled, loading } = automateStoriesFromProps(
  StyledButton,
  initialTemplate,
);

// Prop 값 타입과 입력 UI 를 정의합니다.
const ownArgTypes = {
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
  width: {
    control: {
      type: 'number',
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

// 각 Prop 마다 꼭 필요한 기본 속성값만 부여해서 직관적으로 이해할 수 있게 합니다.
Playground.args = {
  width: 'auto',
  size: 'medium',
  color: 'primary',
  outlined: false,
  disabled: false,
  loading: false,
};
size.args = {
  size: 'x-large',
};
width.args = {
  width: 200,
};
color.args = {
  color: 'secondary',
};
outlined.args = {
  outlined: true,
};
disabled.args = {
  disabled: true,
};
loading.args = {
  loading: true,
};

// const EventTemplate = (args, { argTypes }) => ({
//   components: { StyledButton },
//   props: Object.keys(argTypes),
//   methods: { ClickEvent: action('clicked') },
//   template: '<styled-button v-bind="$props">Button</styl>'
// })

// const ClickEvent = EventTemplate.bind({})

// ClickEvent.storyName = ':ClickEvent'
// const disabledArgTypes = makeAlldisabledArgTypes(StyledButton)
// ClickEvent.argTypes = {
//   ...disabledArgTypes,
//   ClickEvent: {
//     table: { disable: false }
//   }
// }

// [Docs] 탭에 자동생성되는 코드를 이쁘게 만들어주기 위한 추가 작업입니다.
disableArgs([size, width, color, outlined, disabled, loading], StyledButton);

export { Playground, size, width, color, outlined, disabled, loading };

export default {
  title: 'Controls/StyledButton',
  component: StyledButton,
  argTypes: { ...ownArgTypes },
};
