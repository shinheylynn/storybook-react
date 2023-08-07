/** @type { import('@storybook/vue3').Preview } */
import '../src/tailwind.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Primary',
      values: [
        { name: 'Primary', value: '#ffffff' },
        { name: 'Background', value: '#fffcf9' },
        { name: 'Light', value: '#fafafa' },
        { name: 'Dark', value: '#161a31' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      // 스토리 정렬 순서만 정의 가능
      // 어느 폴더에 속할 것인지는 각 스토리에서 정의 가능 (export defalut >>> title)
      storySort: {
        order: [
          'Welcome',
          'Controls',
          [
            'StyledButton',
            'StyledCheckbox',
            'StyledRadio',
            'StyledInput',
            'StyledSelect',
            'StyledCallout',
            'StyledBadge',
            'StyledTab',
            'StatusBadge',
            'NumberInput',
            'PaginationBar',
            'TooltipMessage',
            'TooltipHover',
            'ToggleSwitch',
          ],
          'Snippets',
          [
            'PageTitle',
            'MessageBar',
            'CustomModal',
            'CustomModalFullpage',
            'ContentPlaceholder',
            'IdentityWatermark',
            'StarGrade',
            'PdfSlide',
            'MessageSnackbar',
          ],
          'Archives',
          [
            'RadialProgress',
            'LinearProgress',
            'DatePicker',
            'TextareaAutosize',
            'NumberPad',
            'BillingPlanUnit',
            'MultiSelectUnit',
            'CouponUnit',
          ],
        ],
      },
    },
  },
};

export default preview;
