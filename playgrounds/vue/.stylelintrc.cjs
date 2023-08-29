const createPrefixOverrides = require('@patriarche/stylelint-config-vue/createPrefixOverrides');

module.exports = {
  extends: [
    '@patriarche/stylelint-config-vue',
  ],
  overrides: createPrefixOverrides([
    'admin',
    'customer'
  ])
};