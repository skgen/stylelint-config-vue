const { rules } = require('@patriarche/stylelint-config-base');

module.exports = {
  extends: [
    '@patriarche/stylelint-config-base',
    'stylelint-config-standard-vue/scss',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        ...rules,
        'selector-class-pattern': [/((mk|pux)-(App|The)[A-Z][a-zA-Z0-9]+)/, { resolveNestedSelectors: false }],
      },
    },
  ],
};
