/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: '2022'
  },
  settings: {
    'import/resolver': {
      node:true,
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.ts', '.vue']
      }
    }
  },
  ignorePatterns: ['*.config.js'],
  rules: {
    // Eslint off 목록

    'max-len': ['error', { code: 120 }],
    // 두단어 조합인 컴포넌트가 아니면 에러 - off
    'vue/multi-word-component-names': 'off',
    // v-html을 쓰면 xss 문제때문에 에러 - off
    'vue/no-v-text-v-html-on-component': 'off',
    // v-if와 v-for를 혼용해서 쓰면 에러 -off
    'vue/no-use-v-if-with-v-for': 'off',
    // slot 관련 에러 - off
    'vue/no-unused-vars': 'off',
    // props를 직접 수정하는 건 좋지 않지만 사용하는 곳이 많음 - off
    'vue/no-mutating-props': 'off',

    // Eslint error 목록

    // HTML의 태그의 속성이나 컴포넌트에 전달된 props가 2개 이상일 경우 newline으로 변경합니다.
    // 'vue/max-attributes-per-line': ['error', { singleline: 2 }],

    // html 태그와 코드의 들여쓰기를 2만큼 자동으로 정렬해 줍니다
    // 'vue/html-indent': ['error', 2],
    'indent': ['error', 2],

    // 세미콜론을 허용하지 않습니다.
    'semi': ['error', 'never'],

    // 쌍따옴표를 허용하지 않습니다.
    'quotes': ['error', 'single'],

    // 의미없는 공백을 허용하지 않습니다.
    'no-trailing-spaces': 'error',

    // 괄호 사이 공백을 허용합니다.
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    // 콜론 뒤 한칸을 띄어줍니다.
    'switch-colon-spacing': ['error', { 'after': true,
      'before': false }],

    // trailing comma를 허용하지 않습니다.
    'comma-dangle': ['error', 'never'],

    // self-closing 태그이면 한칸 띄어 줍니다. ex <img/> (x), <img /> (o)
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        selfClosingTag: 'always'
      }
    ],

    // 'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],


    // 닫는 태크 브라켓을 새로운 라인으로 정렬하지 않고 끝나는 곳에 붙인다.
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    // console.log를 허용하지 않습니다. 필요하다면 console.info를 쓰시고,
    // 부득이하게 console.log 써야되는 경우에는 윗줄에 /* eslint-disable-next-line no-console */ 를 추가해주세요.
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug', 'group', 'groupEnd'] }],

    // import 정렬
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ]

  }
}