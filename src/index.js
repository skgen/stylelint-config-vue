const createPrefixOverrides = require('./createPrefixOverrides');

module.exports = {
  extends: [
    '@patriarche/stylelint-config-base',
    'stylelint-config-standard-vue/scss',
  ],
  overrides: createPrefixOverrides(['App']),
};
